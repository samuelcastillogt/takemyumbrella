import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Noresult() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/noresult.png")}
        style={styles.tinyLogo}
      />
      <Text style={styles.title}>There are not examples for this word</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 450,
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    tinyLogo:{
      width: 300,
      height: 300
    },
    title:{
      fontSize: 20,
      color: "white",
    fontWeight: "bold",
    textAlign: "center"      
    }
})