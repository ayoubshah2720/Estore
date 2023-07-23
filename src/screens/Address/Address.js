import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderScreen from '../Header/HeaderScreem'
import Images from '../../Constants/Images'
import { useNavigation } from '@react-navigation/native'

const Address = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <HeaderScreen title='Add a new address' />
        </View>
    <View style={styles.locationContainer}>
        <Image style={styles.locationImg} source={Images.locationIcon} />
        <Text style={styles.locationText}> Use cuurent location </Text>
    </View>
    <View style={styles.mainBody}>
    <View style={styles.inputFieldsMain}>
    <View style={styles.inputFieldsBody}>
        <Text style={styles.label}> Name </Text>
        <TextInput style={styles.labelInput} placeholder='Enter Name'/>
    </View>
    <View style={styles.inputFieldsBody}>
        <Text style={styles.label}> Phone </Text>
        <TextInput style={styles.labelInput} keyboardType='numeric' placeholder='Enter Phone'/>
    </View>
    <View style={styles.inputFieldsBody}>
        <Text style={styles.label}> Street address </Text>
        <TextInput style={styles.labelInput} placeholder='Street address'/>
    </View>
    <View style={styles.inputFieldsBody}>
        <Text style={styles.label}> City </Text>
        <TextInput style={styles.labelInput} placeholder='City'/>
    </View>
    <View style={styles.inputFieldsBody}>
        <Text style={styles.label}> State </Text>
        <TextInput style={styles.labelInput} placeholder='State'/>
    </View>
    <View style={styles.inputFieldsBody}>
        <Text style={styles.label}> Zipcode </Text>
        <TextInput style={styles.labelInput} keyboardType='numeric' placeholder='Zipcode'/>
    </View>
    </View>
    <TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={styles.bottomView}>
        <Text style={styles.bottomBtn}> Save </Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
    container:{
        height:780,
        backgroundColor:'#f2f2f7',
    },
    locationContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20,
        backgroundColor:'#fff',
    },
    locationImg:{
        height:25,
        width:25,
    },
    locationText:{
        color:'#4F9FFC',
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:5
    },
    mainBody:{
        marginVertical:50,
    },
    inputFieldsMain:{
        // flexDirection:'column',
        // justifyContent:'space-between'
    },
    inputFieldsBody:{
        paddingHorizontal:20
    },
    label:{
        color:'#4F4F4F',
        fontSize:14,
    },
    labelInput:{
        fontSize:16,
        borderBottomWidth:1,
        borderBottomColor:'#DBDBDE',
        marginVertical:5,
    },
    bottomView:{
        marginTop:40,
        paddingVertical:20,
        backgroundColor:'#fff',
    },
    bottomBtn:{
        backgroundColor:'#33907C',
        color:'#fff',
        paddingVertical:10,
        marginHorizontal:40,
        fontSize:20,
        textAlign:'center',
        borderRadius:30
    }
})