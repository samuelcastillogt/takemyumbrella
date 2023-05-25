import { StyleSheet, Text, View, CheckBox } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { Ionicons } from '@expo/vector-icons';

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});
const Setings = () => {
  const user = useSelector((state)=> state.user.user)
  useEffect(()=>{
    // appOpenAd.load();

// // Show the app open ad when user brings the app to the foreground.
// appOpenAd.show();
  },[])
  return (
    <View style={styles.container}>
      <Ionicons name="person" size={150} color="white" />
      <Text style={styles.text}>{user.nombre}</Text>
       <Text style={styles.radomText}>Puntos Acumulados: {user.puntos}</Text>
       <Text style={styles.radomText}>Actualmente estoy trabajando para mejorar el App. Por el momento el area de configuracion no esta lista.</Text>
    </View>
  )
}

export default Setings

const styles = StyleSheet.create({
  container:{
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1e2c"
  },
  text:{
    fontSize: 30,
    marginTop: 30,
    color: "red"
  },
  radomText:{
    color: "white",
    width: "80%"
  }
})