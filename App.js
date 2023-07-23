import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import AllProducts from './src/screens/Products/AllProducts'
import SingleProduct from './src/screens/Products/SingleProduct'
import Home from './src/Home/Home';
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/Onboarding/Onboarding/Onboarding';
import Signin from './src/screens/Auth/Signin/Signin';
import Signup from './src/screens/Auth/Signup/Singup';
import Cart from './src/screens/Cart/Cart';
import Address from './src/screens/Address/Address';
import SplashScreen from './src/Onboarding/SplashScreen/SplashScreen';


const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="AllProducts" component={AllProducts} options={{ headerShown: false }} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})