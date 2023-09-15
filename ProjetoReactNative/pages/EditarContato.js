import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header, Button, Icon, Input } from 'react-native-elements';
import axios from 'axios';

export default function EditarContato({ navigation, route }) {
  const goToListaTell = () => {
    navigation.navigate('ListaTell');
  };
  const { id, name, telefone, email } = route.params;

  function excluirContato() {
    axios.delete('http://localhost:3000/contatos/' + id )
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });

      goToListaTell()
  }

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Editar Contato",
          style: { color: "#fff", fontWeight: "bold", fontSize: 18 }
        }}
        leftComponent={
          <Icon
            name="arrow-left"
            color="#fff"
            onPress={goToListaTell}
          />
        }
        containerStyle={styles.headerContainer}
      />

      <View style={styles.inputContainer}>
        <Input
          placeholder={name}
          inputStyle={styles.input}
        />
        <Input
          placeholder={email}
          inputStyle={styles.input}
        />
        <Input
          placeholder={telefone}
          inputStyle={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Alterar"
          onPress={goToListaTell}
          buttonStyle={[styles.button, styles.primaryButton]}
        />
        <Button
          title="Excluir"
          onPress={excluirContato}
          buttonStyle={[styles.button, styles.deleteButton]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#1670f7",
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  button: {
    width: 120,
  },
  primaryButton: {
    backgroundColor: "#1670f7",
  },
  deleteButton: {
    backgroundColor: "red",
  },
});
