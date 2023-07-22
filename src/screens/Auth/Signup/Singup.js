import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
      <View style={styles.container}>
          <View style={styles.mainBody}>
              <View style={styles.titleBody}>
                  <Text style={styles.title}> Welcome to Tradeeee </Text>
              </View>
              <View style={styles.loginTitleBody}>
                  <Text style={styles.loginTitle}> Signup to your account </Text>
              </View>
              <View style={styles.loginBody}>
                <TextInput style={styles.loginInput} placeholderTextColor='#fff' placeholder='First Name'/>
                <TextInput style={styles.loginInput} placeholderTextColor='#fff' placeholder='Last Name'/>
                <TextInput style={styles.loginInput} placeholderTextColor='#fff' placeholder='Email/Mobile number'/>
                <TextInput style={styles.loginInput} keyboardType='numeric' placeholderTextColor='#fff' placeholder='Password'/>
                <TextInput style={styles.loginInput} keyboardType='numeric' placeholderTextColor='#fff' placeholder='Re-enter Password'/>
              </View>
              <View style={styles.loginBtnBody}>
                <Text style={styles.loginBtn}> Create </Text>
              </View>
              <View style={styles.signupBody}>
                <Text style={styles.signupText}> Have an account? </Text>
                <Text style={styles.signupText1}> Signin </Text>
              </View>
          </View>
      </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        // flex:1,
        height:760,
        backgroundColor:'#33907C'
    },
    titleBody:{
        alignItems:'center',
        marginTop:100,
    },
    title:{
        fontSize:24,
        color:'#fff',
    },
    loginTitleBody:{
        alignItems:'center',
    },
    loginTitle:{
        fontSize:16,
        color:'#fff',
        paddingVertical:30,
        marginTop:30,
    },
    loginBody:{
        justifyContent:'center',
        paddingHorizontal:40,
    },
    loginInput:{
        borderWidth:1,
        borderColor:'#fff',
        fontSize:16,
        color:'#fff',
        borderRadius:30,
        paddingHorizontal:20,
        marginVertical:10
    },
    loginBtnBody:{
        backgroundColor:'#fff',
        paddingVertical:10,
        marginHorizontal:40,
        borderRadius:30,
        alignItems:'center',
        marginVertical:20
    },
    loginBtn:{
        fontSize:20,
        fontWeight:'700',
        color:'#13B58C'
    },
    forgetBody:{
        marginVertical:20,
        alignItems:'center'
    },
    forgetText:{
        fontSize:18,
        fontFamily:'Montserrat',
        color:'#fff',
    },
    signupBody:{
        marginVertical:20,
        alignItems:'center'
    },
    signupText:{
        fontSize:18,
        fontFamily:'Montserrat',
        color:'#fff',
    },
    signupText1:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
    }
})