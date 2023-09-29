import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Inicio({ navigation }) {

  const firebaseConfig = {
    apiKey: "AIzaSyBUCLOwi85ikkJirvGhwVje1W41iXhsTGU",
    authDomain: "platinum-scout-371220.firebaseapp.com",
    projectId: "platinum-scout-371220",
    storageBucket: "platinum-scout-371220.appspot.com",
    messagingSenderId: "720515737791",
    appId: "1:720515737791:web:9f947f12d09714faa4be0a",
    measurementId: "G-690RQL20BT"
  };
  const app = initializeApp(firebaseConfig);

  function LoginGoogle() {
    
    
    const auth = getAuth();
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigation.navigate('ListaTell')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <ImageBackground
      source={require('../assets/24097127_y10n_fpni_211014.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bem-vindo ao Sistema</Text>
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Cadastrar')}
          buttonStyle={styles.button}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={[styles.button, styles.loginButton]}
        />
        <Button
          title="Entre com o Google"
          onPress={() => LoginGoogle()}
          buttonStyle={[styles.button, styles.googleButton]}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1670f7',
    width: 200,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#3CB371',
  },
  googleButton: {
    backgroundColor: '#b33c4a',
  }
});
