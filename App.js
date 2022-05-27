import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable,Image } from 'react-native';
import { useState } from 'react';
import InitialScreen from './Pages/InitialScreen';
import LoginScreen from './Pages/LoginScreen'
import MainMenuScreen from './Pages/MainMenuScreen';
import ProductsScreen from './Pages/ProductsScreen'
import AddProduct from './Pages/AddProduct';
import EditProducts from './Pages/EditProducts'


import add from './assets/plus-circle.png'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const headerProps = {
  headerShown: false
}

export default function App() {
  const [prod, setProd] = useState([{}])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerProps}>
        <Stack.Screen name='initial' component={InitialScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='MainMenu' component={MainMenuScreen} />
        <Stack.Screen name='Products' component={ProductsScreen} options={({ navigation }) => ({
          headerShown: true, title: 'Produtos', headerTitleAlign: 'center', headerRight: () => (<Pressable onPress={() => navigation.navigate('addProduct')}>
            <Image source={add} />
          </Pressable>)
        })} 
        />
        <Stack.Screen name='addProduct' component={AddProduct} options={{ headerShown: true, title: 'Cadastro de produto', headerTitleAlign: 'center' }} />
        <Stack.Screen name='EditProduct' component={EditProducts} options={{ headerShown: true, title: 'Editar Produtos', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
