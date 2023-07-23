import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HeaderScreen = props => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
    <Pressable style={styles.backIconView} onPress={goBack}>
    <Ionicons name="arrow-back" size={25} color="#fff" />
    </Pressable>
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
        flexDirection:'row',
        alignItems:'center',
      // textAlign:'center',
      // justifyContent:'center'
      gap:100
    },
    HeaderTitle:{
      color:'#FFFFFF',
      fontSize:24,
      fontStyle:'bold',
    },
    backIconView:{
      paddingHorizontal:25
    }
})