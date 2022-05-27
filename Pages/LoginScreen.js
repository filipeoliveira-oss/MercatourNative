import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Pressable, KeyboardAvoidingView, Keyboard  } from 'react-native';
import Constants from 'expo-constants';
import shoppingcart from '../assets/shoppingcart.png'

export default function Login(props) {
  const navigation = props.navigation


  function login(){
    alert('entrou')
    Keyboard.dismiss()
  }

  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
 
  return (
    <>

      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={styles.view}>
          <Image source={shoppingcart} style={isKeyboardVisible == false ? styles.shoppingcartBig : styles.shoppingcartSmal} />
          <Text style={styles.welcome}>Bem vindo de volta!</Text>
          <Text style={styles.subtext}>Entre para continuar</Text>
        </View>
        

        <View class='form' style={styles.form}>
          <TextInput style={styles.input} placeholder={'Digite seu email'}/>
          <TextInput style={styles.input} placeholder={'Digite sua senha'} secureTextEntry={true}/>
        </View>
        
        <Pressable style={styles.loginPres} onPress={() => navigation.navigate('MainMenu')}>
          <Text style={styles.login}>Entrar</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  view:{
    width: '100%',
    alignItems: 'center'
  },
  container: {
    marginTop: Constants.statusBarHeight,
    alignItems: "center"
  },
  welcome: {
    fontSize: 35,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 10
  },
  subtext: {
    fontSize: 25,
    color: 'red',
    fontWeight: '300',
    marginTop: 10
  },
  shoppingcartBig: {
    width: 308,
    height: 277,
    marginTop: 25
  },
  shoppingcartSmal:{
    width: 190,
    height: 170,
    marginTop: 135,
    marginLeft:0
  },
  form: {
    marginTop: 50
  },
  input: {
    height: 50,
    width: 330,
    borderColor: (56, 54, 54),
    borderWidth: 1,
    textAlign: 'center',
    marginTop: -1
  },
  loginPres: {
    width: 330,
    height: 50,
    marginTop: 50,
    backgroundColor: (56, 54, 54),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20
  },
  login: {
    flex: 1,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  }
});