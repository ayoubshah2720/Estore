import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderScreen from '../Header/HeaderScreem'
import Images from '../../Constants/Images'

const Cart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderScreen title='Cart' />
            </View>
            <View style={styles.bodyContainerMain}>
            <View style={styles.bodyContainer}>
            <View style={styles.addressContainer}>
                <Text style={styles.addressText}>+</Text>
                <Text style={styles.addressText}>Add New Address</Text>
            </View>
            <View style={styles.singleItemView}>
                <Image source={Images.cocaCola} style={styles.productImg} />
                <View style={styles.itemDetail}>
                    <Text style={styles.productTitle}> Coca-Cola </Text>
                    <View style={styles.productPrice}>
                        <Text style={styles.price}> $25 </Text>
                        <Text style={styles.descount}> $50 </Text>
                        <Text style={styles.percentage}> 50% Off </Text>
                    </View>
                    <View style={styles.productPrice}>
                        <Text style={styles.percentage}> Qty: 1 </Text>
                        <Image source={Images.downArrow} style={styles.downArrow} />
                    </View>
                </View>
            </View>
            <View style={styles.removeBtn}>
                <Text style={styles.removeText}> Remove </Text>
            </View>
            <View style={styles.priceDetailMainView}>
                <Text style={styles.priceMainTitle}> Price Details </Text>
                <View style={styles.priceDetailMain}>
                <Text style={styles.priceText}> Price (1 Item) </Text>
                <Text style={styles.priceText}> $25 </Text>
                </View>
                <View style={styles.priceDetailMain}>
                <Text style={styles.priceText}> Deleivery Fee </Text>
                <Text style={styles.priceText}> Info </Text>
                </View>
            </View>
            <View style={styles.totalAmountView}>
                <Text style={styles.totalAmount}> Total Amount </Text>
                <Text style={styles.totalAmount}> $25 </Text>
            </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.paymentText}> Continue to Payment </Text>
            </View>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // flexDirection:'column',
        backgroundColor: '#F0F4FB'
    },
    bodyContainerMain:{
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingVertical: 20,
        backgroundColor: '#fff'

    },
    addressText:{
        fontSize:14,
        color:'#000000',
    },
    singleItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 15,
        gap: 10,
    },
    productImg: {
        width: 100,
        height: 100,
    },
    itemDetail: {
        backgroundColor: '#fff',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    productPrice: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#33907C'
    },
    descount: {
        color: '#4F4F4F',
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    percentage: {
        color: '#4F4F4F',
        fontSize: 14,
        fontWeight: '500'
    },
    downArrow: {
        height: 8,
        width: 15,
        margin: 10
    },
    removeBtn:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        paddingVertical:20,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50,
    },
    removeText:{
        fontSize:20,
        fontWeight:'500',
        color:'#BEBEBE',
    },
    priceDetailMainView:{
        backgroundColor:'#fff'
    },
    priceMainTitle:{
        fontSize:30,
        fontWeight:'700',
        color:'#000000',
        fontFamily:'Montserrat',
        paddingHorizontal:15,
        paddingVertical:10
    },
    priceDetailMain:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    priceText:{
        fontSize:18,
        color:'#000000',
        fontFamily:'Montserrat',
        paddingVertical:5
    },
    totalAmountView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        paddingVertical:20,
        backgroundColor:'#fff',
    },
    totalAmount:{
        fontSize:20,
        fontWeight:'700',
        color:'#000000',
        fontFamily:'Montserrat',
    },
    bottomContainer:{
        marginTop:50,
        paddingVertical:20,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    paymentText:{
        backgroundColor:'#33907C',
        paddingVertical:15,
        paddingHorizontal:50,
        color:'#fff',
        fontSize:20,
        borderRadius:30
    }
})