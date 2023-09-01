import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem vindo ao sistema</Text>
      <br />
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastrar')}
      />
      <br />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}