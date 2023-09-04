import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from 'react-native-elements';

export default function Cadastrar({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastrar = () => {
    navigation.navigate('ListaTell');
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
      <Button
        title="Cadastrar"
        onPress={handleCadastrar}
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
