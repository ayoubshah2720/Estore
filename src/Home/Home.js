import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AllProducts from '../screens/Products/AllProducts'
import SplashScreen from '../Onboarding/SplashScreen/SplashScreen'
import HeaderScreen from '../screens/Header/HeaderScreem'
import { BannerAd, BannerAdSize, GAMBannerAd, TestIds } from "react-native-google-mobile-ads"
import Cart from '../screens/Cart/Cart'
import SingleProduct from '../screens/Products/SingleProduct'
import Signin from '../screens/Auth/Signin/Signin'
import Signup from '../screens/Auth/Signup/Singup'
import Address from '../screens/Address/Address'


const Home = () => {
  const [isSplash, setIsSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false)
    }, 4000);
  })
  return (
    <View style={styles.container1}>
      {isSplash ? <SplashScreen />
        :
        <View style={styles.container}>
          {/* <HeaderScreen title='Home'/> */}
          {/* <Signup/> */}
          {/* <Signin/> */}
          {/* <AllProducts/> */}
          {/* <SingleProduct/> */}
          <Cart />
          {/* <Address /> */}
        </View>
      }
      <View style={styles.bottomBanner}>
        <GAMBannerAd
          unitId={TestIds.BANNER}
          sizes={[BannerAdSize.FULL_BANNER]}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
})