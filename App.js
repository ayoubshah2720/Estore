import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import AllProducts from './src/screens/Products/AllProducts'
import SingleProduct from './src/screens/Products/SingleProduct'
import Home from './src/Home/Home';
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"


const App = () => {
  // const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Home/>
      {/* <AllProducts/> */}
      {/* <SingleProduct/> */}
      
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})