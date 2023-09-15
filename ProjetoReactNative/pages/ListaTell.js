import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

function ListItem({ item: { id, name, avatar_url, telefone, email }, navigation }) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('EditarContato',
        { id, name, telefone, email })}
    >
      <Avatar
        size="medium"
        rounded
        source={{
          uri: avatar_url,
        }}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

export default function ListaTell({ navigation }) {

  const [contatos, setContatos] = useState([]);
  const IsFocused = useIsFocused();
  useEffect(() => {
    axios.get('http://localhost:3000/contatos')
      .then(function (response) {
        setContatos(response.data);
      }).catch(function (error) {
        console.log(error);
      });
  }, [IsFocused]);

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
        data={contatos}
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
    fontSize: 18,
  },
  headerContainer: {
    backgroundColor: "#1670f7",
  },

});
