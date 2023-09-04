import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Input } from 'react-native-elements';

export default function Login({ navigation }) {
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
        <Input placeholder='Login' />
        <Input placeholder='Senha' />

        <Button title="Login"
          onPress={() => navigation.navigate('ListaTell')} />
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