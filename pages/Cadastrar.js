import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Input } from 'react-native-elements';

export default function Cadastrar({ navigation }) {
  return (
    <>
      <View style={[styles.container, {
        flexDirection: "column",
        flex: 1,
        padding: 20,
        justifyContent: "center",
        gap: 16
      }]}>
        <Text style={{
          fontFamily: "sans-serif",
          alignSelf: "center",
          fontSize: 26,
          fontWeight: 700
        }}>
          Crie sua conta
        </Text>
        <br />
        <Input placeholder='Nome' />
        <Input placeholder='Email' />
        <Input placeholder='Senha' />

        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('ListaTell')}
        />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
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