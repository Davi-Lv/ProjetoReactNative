import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button, Icon, Input } from 'react-native-elements';

export default function EditarContato({ navigation }) {
  const goToListaTell = () => {
    navigation.navigate('ListaTell');
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Editar Contato",
          style: { color: "#fff", fontWeight: "bold" }
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
          placeholder='Nome'
          inputStyle={styles.input}
        />
        <Input
          placeholder='Email'
          inputStyle={styles.input}
        />
        <Input
          placeholder='Telefone'
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
          onPress={goToListaTell}
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
    marginBottom: 20,
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
