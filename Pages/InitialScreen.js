import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native';
import shoppingcart from '../assets/shoppingcart.png'
import Constants from 'expo-constants';
import facebook from '../assets/facebook.png'
import background from '../assets/background.jpg'

export default (props) => {
  const navigation = props.navigation


  return (
    <>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <Image source={shoppingcart} style={styles.shoppingcart}></Image>
          <Text style={styles.mercatour}>MercaTour</Text>

          <View style={styles.optionsContainer}>
            <Pressable style={styles.pressable}>
              <Image source={facebook} style={styles.facebook}></Image>
              <Text style={styles.text}>Conectar com facebook</Text>
            </Pressable>

            <Pressable style={styles.pressable} onPress={()=> navigation.navigate('Login')}>
              <Text style={styles.text}>Entrar</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
              <Text style={styles.text}>Cadastrar</Text>
            </Pressable>

            <Text style={styles.textPartner}>Cadastre-se como <Text style={styles.partner} onPress={() => alert('Cadastro entregador')}>parceiro</Text></Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background:{
    width: '100%',
    height: '100%'
  },
  container: {
    marginTop: Constants.statusBarHeight,
    alignItems: "center"
  },
  shoppingcart: {
    width: 308,
    height: 277
  },
  mercatour: {
    marginTop: 40,
    fontSize: 42,
    fontWeight: 'bold',
    color: 'red'
  },
  optionsContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  pressable: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
    margin: 20,
    elevation: 20
  },
  facebook: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textPartner: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  partner: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
  }
});
