import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, Alert, FlatList} from 'react-native';
import Constants from 'expo-constants';
import EditProducts from '../Pages/EditProducts'
import axios from 'axios'


export default function App(props) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isEditVisible, setIsEditVisible] = useState(false)
  const [prod, setProd] = useState([])
  const [load,setLoad] = useState(true)
  const navigation = props.navigation

  //Reload page
  useEffect(() => {
    axios.get('http://192.168.0.175:3000/products/list')
      .then(function (response) {
        setProd(response.data.ProductsList)
      })

      navigation.addListener('focus', ()=>setLoad(!load))
  }, [load, navigation])
 

  const AddProductModal = () => {
    return (
      <>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert("Cadastro de produto cancelado");
            setIsModalVisible(!isModalVisible);
          }}
        >
        </Modal>
      </>
    )
  }

  const EditProduct = () => {
    return (
      <>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isEditVisible}
          onRequestClose={() => {
            Alert.alert("Cadastro de produto cancelado");
            setIsModalVisible(!isEditVisible);
          }}
        >
          <EditProducts modal={isEditVisible} close={setIsEditVisible} ></EditProducts>

        </Modal>
      </>
    )
  }


  return (
    <>

      <View style={styles.productsContainer}>
        {prod.length == 0 ? <Text style={styles.noProd}>sem produtos cadastrados</Text>

          :

          <FlatList
            data={prod}
            renderItem={({ item }) => <>
              <Pressable style={styles.product} onPress={() => navigation.navigate('EditProduct', {
                itemid: item.id,
                name: item.data.nome,
                description: item.data.descricao,
                provider: item.data.vendedor,
                value: item.data.valor,
                quantity: item.data.quantidade,
                valorCompra: item.data.valorCompra
              })} >
                <View>
                  <Text>{item.data.nome}</Text>
                  <Text>{item.data.vendedor}</Text>
                  <View style={styles.productLine}>
                    <Text>{item.data.quantidade}</Text>
                    <Text>{item.data.valor}</Text>
                  </View>
                </View>
              </Pressable>
            </>}
            keyExtractor={item => item.id}
           
          />
        }
        <AddProductModal />
        <EditProduct />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'red',
    width: 200,
    height: 200
  },
  header: {
    marginTop: Constants.statusBarHeight,
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  back: {
    width: 41.2,
    height: 30,
    marginLeft: 5,
    marginTop: -5
  },
  pageName: {
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    flex: 1,
    textAlign: 'center'
  },
  add: {
    marginTop: -5,
    marginRight: 5
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 5
  },
  noProd:{
    flex: 1,
    justifyContent: 'center',
    marginTop: '50%',

    fontSize: 24,
    fontWeight: 'bold'
  },
  productsContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    overflow: 'scroll'
  },
  product: {
    width: 300,
    marginTop: 20,
    backgroundColor: 'whitesmoke',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 8,
  },
  productLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 150
  },
  viewOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
    marginRight: 10
  },
  containerInfo: {
    marginTop: -30
  },
  edit: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  }
});
