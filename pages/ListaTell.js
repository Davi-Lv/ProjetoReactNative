import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList, View, ImageBackground } from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';

const ContatoLista = [
  {
    id: '1',
    name: 'Amy Farha',
    avatar_url:
      'https://geekblog.com.br/wp-content/uploads/2020/12/Desktop-Wallpaper-Stormtrooper-Of-Star-Wars-Movie-Hd-Image-Picture-Background-8rgwwh.jpg.webp',
  },
  {
    id: '2',
    name: 'Chris',
    avatar_url:
      'https://geekblog.com.br/wp-content/uploads/2020/12/Desktop-Wallpaper-Stormtrooper-Of-Star-Wars-Movie-Hd-Image-Picture-Background-8rgwwh.jpg.webp',
  },
  {
    id: '3',
    name: 'Jackson Chris',
    avatar_url:
      'https://geekblog.com.br/wp-content/uploads/2020/12/Desktop-Wallpaper-Stormtrooper-Of-Star-Wars-Movie-Hd-Image-Picture-Background-8rgwwh.jpg.webp',
  },
];

function ListItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('EditarContato')}
    >
      <Avatar
        size="medium"
        rounded
        source={{
          uri: item.avatar_url,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function ListaTell({ navigation }) {
  return (
    <>
      <Header
        centerComponent={{
          text: 'Lista de Contatos',
          style: styles.headerText,
        }}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('NovoContato')}>
            <Icon name="add" color="#fff" />
          </TouchableOpacity>
        }
        containerStyle={styles.headerContainer}
      />

      <FlatList
        data={ContatoLista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    margin: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerContainer: {
    backgroundColor: "#1670f7",
  },

});
