import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderScreen from '../Header/HeaderScreem';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SingleProduct = ({ route, navigation }) => {
  // const product  = route.params;
  const product = { "category": "men's clothing", "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "id": 1, "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "price": 109.95, "rating": { "count": 120, "rate": 3.9 }, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" }

  useEffect(() => {
    console.log('product', product)
    // console.log('route.params',route.params)
  })

  // const handleAddToCart = () => {
  //   // Implement your add to cart logic here
  // };

  return (
    <View style={styles.container}>
      <HeaderScreen title='Wishlist' />
    <View style={styles.mainBody}>
      <View style={styles.productTop}>
        <View style={styles.iconsViewMain}>
          <View style={styles.iconsViewLeft}>
            <View style={styles.iconsView}>
              <Ionicons name="arrow-back" size={25} color="#fff" />
            </View>
          </View>
          <View style={styles.iconsViewRight}>
            <View style={styles.iconsView}>
              <Feather name="share-2" size={25} color="#fff" />
            </View>
            <View style={styles.iconsView}>
              <FontAwesome name="heart-o" size={25} color="#fff" />
            </View>
            <View style={styles.iconsView}>
              {/* <FontAwesome name="rocket" size={30} color="#fff" /> */}
              <Entypo name="dots-three-vertical" size={25} color="#fff" />
            </View>
          </View>
        </View>
        <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="contain" />
      </View>
      <View style={styles.productBottom}>
        <Text style={styles.productTitle}> {product.category.toUpperCase()} </Text>
      <View style={styles.productPrice}>
      <Text style={styles.price}> $25 </Text>
      <Text style={styles.descount}> $50 </Text>
      <Text style={styles.percentage}> 50% Off </Text>
      </View>
      </View>

      <View style={styles.productDescription}>
        <Text style={styles.description}> {product.description} </Text>
      </View>
    </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={styles.addToCartView}>
      <Text style={styles.addToCart}> Add to cart </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height:500,
    backgroundColor: '#ffffff',
    flexDirection:'column',
    justifyContent:'space-between'
    // padding: 20,
  },
  mainBody:{
    flexDirection:'column',
    justifyContent:'space-between',
    marginHorizontal:20
  },
  iconsViewMain: {
    width: '100%',
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    zIndex: 111111,
    // top:-10
  },
  iconsView: {
    width: 50,
    height: 50,
    backgroundColor: '#AEB2B5',
    borderRadius: 50,
    opacity:0.75,
    alignItems:'center',
    justifyContent:'center'
  },
  iconsViewRight: {
    flexDirection: 'row',
    gap: 10
  },
  productTop:{
    backgroundColor: 'lightgreen',
    borderRadius:20,
    marginVertical:10,
    marginHorizontal:5
  },
  productImage: {
    width: '100%',
    height: 280,
    marginVertical: 20,
  },
  productBottom:{
    padding:10,
  },
  productTitle:{
    fontSize:18,
    fontWeight:'bold',
    paddingVertical:10
  },
  productPrice:{
    flexDirection:'row',
    alignItems:'center',
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
    color:'#33907C'
  },
  descount:{
    color:'#4F4F4F',
    fontSize:14,
    fontWeight:'500',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  percentage:{
    color:'#4F4F4F',
    fontSize:14,
    fontWeight:'500'
  },
  productDescription:{
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    opacity:0.75,
    padding:20,
    borderRadius:20,
  },
  addToCartView:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  addToCart:{
    color:'#fff',
    fontSize:20,
    fontWeight:'700',
    width:'80%',
    padding:15,
    backgroundColor:'#33907C',
    textAlign:'center',
    borderRadius:50,
    marginVertical:20
  }
});

export default SingleProduct;
