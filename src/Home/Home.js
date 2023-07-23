import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AllProducts from '../screens/Products/AllProducts'
import { BannerAd, BannerAdSize, GAMBannerAd, TestIds } from "react-native-google-mobile-ads"


const Home = () => {
  return (
    <View style={styles.container1}>
        <View style={styles.container}>
          <AllProducts/>
        </View>
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