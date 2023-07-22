// import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import HomeSlider from '../../Constants/HomeSlider/HomeSlider';
import HeaderScreen from '../Header/HeaderScreem';

const AllProducts = props => {
  const [products, setProducts] = useState([]);
  const { navigation } = props

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // console.warn('data',data[0])
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProduct = (product) => {
    // navigation.navigate('SingleProduct',product)
    console.log('product',product);
  }
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={() => handleProduct(item)}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>{item.category.toUpperCase()}</Text>
        <View style={styles.productNameMain}>
        <View style={styles.brandMain}>
        <Text style={styles.brandIcon}> A </Text>
        <Text style={styles.brandName}> IBM </Text>
        </View>
        <Text style={styles.productPrice}>${Math.ceil(item.price)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderScreen title='All Products'/>
      <HomeSlider />
      {products.length ? 
      <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.productList}
      onpress
      />
    :
    <ActivityIndicator size={'large'}/>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // padding: 20,
  },
  productList: {
    // flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productItem: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth:1,
    borderColor:'lightgray'
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginHorizontal:10,
    // borderRadius: 20,
    borderWidth:1,
    borderBottomColor:'#33907C'
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginBottom: 5,
    opacity:0.75,
    paddingHorizontal:5
  },
  productNameMain:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:5
  },
  brandMain:{
    flexDirection:'row',
    alignItems:'center',
    gap:7
  },
  brandIcon:{
    width: 30,
    height:30,
    borderRadius: 50,
    backgroundColor:'#33907C',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  brandName:{
    color:'#33907C',
    fontSize:16,
    fontWeight:'bold',
  },
  productPrice: {
    fontSize: 20,
    color: '#33907C',
    fontWeight:'bold',

  },
});

export default AllProducts;
