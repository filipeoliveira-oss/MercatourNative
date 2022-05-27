import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import axios from 'axios'
import Constants from 'expo-constants';

export default function AddProduct(props) {

    const navigation = props.navigation
    const route = props.route.params
    const id = route.itemid
    const [produto, setProduto] = useState(route.name)
    const [description, setDescription] = useState(route.description)
    const [provider, setProvider] = useState(route.provider)
    const [value, setValue] = useState(route.value)
    const [quantity, setQuantity] = useState(route.quantity)
    const [buyValue, setBuyValue] = useState(route.valorCompra)

    async function handleUpdate(id) {

        Alert.alert(
            'Você tem certeza que deseja editar o item?',
            `Novos valores: 
            Produto: ${produto}
            Descrição: ${description}
            Fornecedor: ${provider}
            Valor: ${value}
            Quantidade: ${quantity}
            Valor de compra: ${buyValue}`,
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        axios.put(`http://192.168.0.175:3000/products/update/${id}`,
                            {
                                nome: produto,
                                descricao: description,
                                vendedor: provider,
                                quantidade: quantity,
                                valor: value,
                                valorCompra: buyValue,
                            })
                            .then((response) => {
                                if (response.status == '200') {
                                    Alert.alert('O produto foi alterado com sucesso')
                                } else {
                                    Alert.alert('Ocorreu um erro na edição do produto. Por favor, tente novamente')
                                }
                            })

                        navigation.goBack()
                    }
                },
                {
                    text: 'Não',
                    onPress: () => {
                        Alert.alert('Edição cancelada')
                        navigation.goBack()
                    }
                }
            ]
        )


    }

    async function handleDelete(id) {

        Alert.alert(
            'Você tem certeza que deseja deletar o item?',
            `${produto}`,
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        axios.delete(`http://192.168.0.175:3000/products/delete/${id}`)
                            .then((response) => {
                                if (response.status == '200') {
                                    Alert.alert('O produto foi deletado com sucesso')
                                } else {
                                    Alert.alert('Ocorreu um erro na exclusão do produto. Por favor, tente novamente')
                                }
                            })

                        navigation.goBack()
                    }
                },
                {
                    text: 'Não',
                    onPress: () => {
                        Alert.alert('Exclusão cancelada')
                    }
                }
            ]
        )


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
                <Pressable style={styles.createPres} onPress={() => handleUpdate(id)}>
                    <Text style={styles.createText}>Editar</Text>
                </Pressable>
                <Pressable style={styles.cancelPres} onPress={() => handleDelete(id)}>
                    <Text style={styles.cancelText}>Deletar</Text>
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
        // marginTop: Constants.statusBarHeight,
        // alignItems: "center"
    },
    modalView: {
        width: '80%',
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
        elevation: 5,
        overflow: 'scroll'
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Roboto',
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 20,
        marginBottom: -20,
        zIndex: 2
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
        backgroundColor: 'green',
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