import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Inicio from './pages/Inicio';
import ListaTell from './pages/ListaTell';
import EditarContato from './pages/EditarContato';
import NovoContato from './pages/NovoContato';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerShown: false,
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Inicio" screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="ListaTell" component={ListaTell} />
      <Stack.Screen name="EditarContato" component={EditarContato} />
      <Stack.Screen name="NovoContato" component={NovoContato} />
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
