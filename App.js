import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Inicio from "./pages/Inicio";
import ListaTell from "./pages/ListaTell"

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="ListaTell" component={ListaTell} /*options={{ headerShown: false }} *//>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}