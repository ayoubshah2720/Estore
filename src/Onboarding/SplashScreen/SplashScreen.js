import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../Constants/Images'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={Images.SplashScreenIcon}
        style={styles.mainIcon}/>
      <Text style={styles.mainTitle}>Tradeee</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'#33907C',
        height:850,
        alignItems:'center',
        justifyContent:'center',
    },
    mainIcon:{
        height:150,
        width:150,
    },
    mainTitle:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    }
})