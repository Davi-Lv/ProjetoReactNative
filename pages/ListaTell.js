import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ListaTell({ navigation }) {
  return (
    <>
      <SafeAreaProvider>
        
      </SafeAreaProvider>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bem vindo ao sistema</Text>
      </View>
    </>

  );
}