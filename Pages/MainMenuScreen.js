import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Pressable, Alert, ImageBackground } from 'react-native';
import shoppingcart from '../assets/shoppingcart.png';
import background from '../assets/background.jpg'
import back from '../assets/back.png'

export default function MainMenu(props) {
  const navigation = props.navigation


  return (
    <>
      <ImageBackground source={background} style={styles.background} >
        <View style={styles.container}>
          <Image source={shoppingcart} style={styles.shoppingcartMenu}></Image>
          <Text style={styles.text}>O que deseja fazer?</Text>

          <View style={styles.buttonsContainer}>
            <Pressable style={styles.servico} onPress={()=> navigation.navigate('Products') }>
              <Text>Produto (Mercado) </Text>
            </Pressable>

            <Pressable style={styles.servico}>
              <Text>Pedido (Mercado e entregador)</Text>
            </Pressable>

            <Pressable style={styles.servico}>
              <Text>Cadastro de cliente</Text>
              {/* possivelmente retirar pois o cadastro de cliente eh feito na primeira tela do aplicativo */}
            </Pressable>

            <Pressable style={styles.servico}>
              <Text>Cadastro de mercado</Text>
              {/* possivelmente retirar pois o cadastro de cliente eh feito na primeira tela do aplicativo */}
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  backPres: {
    alignSelf: 'flex-start'
  },
  back: {
    width: 41.2,
    height: 30,
    marginTop: -15,
    marginLeft: 15,
  },
  shoppingcartMenu: {
    width: 112,
    height: 100,
    marginTop: 80
  },
  text: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 80
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  servico: {
    width: 330,
    height: 50,
    marginTop: 30,
    backgroundColor: 'whitesmoke',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20
  }
});
