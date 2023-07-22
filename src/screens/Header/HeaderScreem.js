import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderScreen = props => {
  return (
    <View style={styles.container}>
      {/* <Image source={}/> */}
      <Text style={styles.HeaderTitle}>{props.title}</Text>
    </View>
  )
}

export default HeaderScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#33907C',
        // height:100,
        paddingVertical:20,
        alignItems:'center',
      textAlign:'center',
      justifyContent:'center'
    },
    HeaderTitle:{
      color:'#FFFFFF',
      fontSize:24,
      fontStyle:'bold',
    }
})