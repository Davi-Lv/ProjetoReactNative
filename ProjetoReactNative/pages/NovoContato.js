import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Header } from "@rneui/base";
import { Icon, Avatar, Button } from 'react-native-elements';
import axios from 'axios';

export default function NovoContato({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const adicionarContato = () => {
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: setNome,
            email: setEmail,
            telefone: setTelefone,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        navigation.navigate('ListaTell')
    };


    return (
        <ScrollView>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={() => navigation.navigate('ListaTell')}>
                        <Icon name="arrow-back" color="#fff" />
                    </TouchableOpacity>
                }
                centerComponent={{
                    text: "Adicionar Novo Contato",
                    style: { color: "#fff", fontWeight: "bold", fontSize: 18 }
                }}
                containerStyle={{ backgroundColor: "#1670f7" }}
            />

            <View style={styles.container}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome"
                    onChangeText={text => setNome(text)}
                    value={nome}
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o telefone"
                    onChangeText={text => setTelefone(text)}
                    value={telefone}
                />

                <Button
                    title="Salvar Contato"
                    onPress={adicionarContato}
                    buttonStyle={styles.addButton}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: "#1670f7",
    },
});
