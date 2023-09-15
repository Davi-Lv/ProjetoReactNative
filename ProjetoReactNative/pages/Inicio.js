import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

export default function Inicio({ navigation }) {
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
    color: '#fff', // Cor do texto
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
});
