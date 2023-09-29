import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Input } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  
  const firebaseConfig = {
    apiKey: "AIzaSyBUCLOwi85ikkJirvGhwVje1W41iXhsTGU",
    authDomain: "platinum-scout-371220.firebaseapp.com",
    projectId: "platinum-scout-371220",
    storageBucket: "platinum-scout-371220.appspot.com",
    messagingSenderId: "720515737791",
    appId: "1:720515737791:web:9f947f12d09714faa4be0a",
    measurementId: "G-690RQL20BT"
  };

  function LoginUser() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('ListaTell');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <>
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <view style={{ display: "flex", justifyContent: "center" }}>
          <Avatar size="xlarge" rounded
            source={{
              uri:
                'https://geekblog.com.br/wp-content/uploads/2020/12/Desktop-Wallpaper-Stormtrooper-Of-Star-Wars-Movie-Hd-Image-Picture-Background-8rgwwh.jpg.webp',
            }}
          />
        </view>
        <Input
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder='Senha'
          value={senha}
          onChangeText={setSenha}
        />
        {error ? <Text>{error}</Text> : null}
        <Button title="Login"
          onPress={() => LoginUser()} />
        <Button title="Cadastre-se"
          onPress={() => navigation.navigate('Cadastrar')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 16
  }
});