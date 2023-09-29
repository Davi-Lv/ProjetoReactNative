import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastrar({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
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

  function CadastrarUsuario() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Inicio');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Input
        placeholder='Nome'
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder='CPF'
        value={cpf}
        onChangeText={setCpf}
      />
      <Input
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder='Senha'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {error ? <Text>{error}</Text> : null}
      <Button
        title="Cadastrar"
        onPress={() => CadastrarUsuario()}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 10
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 16,
  },
});
