import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert, KeyboardAvoidingView,ScrollView  } from 'react-native';


export default function AddProduct(props) {
    const navigation = props.navigation

    const [produto, setProduto] = useState('')
    const [description, setDescription] = useState('')
    const [provider, setProvider] = useState('')
    const [value, setValue] = useState('')
    const [quantity, setQuantity] = useState('')
    const [buyValue, setBuyValue] = useState('')


    function handleAdd() {
        if (produto != '' && description != '' && provider != '' && value != '', quantity != '', buyValue != '') {
            axios.post('http://192.168.0.175:3000/products/create', {
                nome: produto,
                vendedor: provider,
                descricao: description,
                valor: value,
                quantidade: quantity,
                valorCompra: buyValue,
            })
                .catch(function (error) {
                    console.log(error);
                });
                
            Alert.alert('Produto cadastrado')

            navigation.goBack()

        }else{
            Alert.alert('Por favor, preencha todos os campos')
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.modalView}>
                <ScrollView style={{ width: '100%' }} persistentScrollbar={true}>
                    <Text style={styles.label}>Produto</Text>
                    <TextInput placeholder='Digite o nome do produto' style={styles.input} onChangeText={text => setProduto(text)} value={produto}></TextInput>
                    <Text style={styles.label}>Fornecedor</Text>
                    <TextInput placeholder='Qual o fornecedor do produto?' style={styles.input} onChangeText={text => setProvider(text)} value={provider}></TextInput>
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput placeholder='Digite a descrição do produto' multiline={true} style={[styles.input, { overflow: 'scroll', height: 80 }]} onChangeText={text => setDescription(text)} value={description}></TextInput>
                    <Text style={styles.label}>Valor</Text>
                    <TextInput placeholder='Qual o valor de venda?' style={styles.input} onChangeText={text => setValue(text)} value={value} keyboardType='numeric'></TextInput>
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInput placeholder='Digite a quantidade/peso do produto' style={styles.input} onChangeText={text => setQuantity(text)} value={quantity}></TextInput>
                    <Text style={styles.label}>Valor de compra</Text>
                    <TextInput placeholder='Qual o valor de venda?' style={styles.input} onChangeText={text => setBuyValue(text)} value={buyValue} keyboardType='numeric'></TextInput>

                   
                </ScrollView>
                <Pressable style={styles.createPres} onPress={() => handleAdd()}>
                        <Text style={styles.createText}>Cadastrar</Text>
                    </Pressable>
                    <Pressable style={styles.cancelPres} onPress={() => navigation.navigate('Products')}>
                        <Text style={styles.cancelText}>Cancelar</Text>
                    </Pressable>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: "#e3e3e3",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textAdd: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Roboto'
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Roboto',
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 20,
        marginBottom: -20,
        zIndex: 2,

    },
    input: {
        height: 50,
        width: '90%',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        backgroundColor: 'white',
        elevation: 20,
    },
    createPres: {
        width: '100%',
        height: 45,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20
    },
    createText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    cancelPres: {
        width: '100%',
        height: 45,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 5
    },
    cancelText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})