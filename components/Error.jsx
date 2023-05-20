import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import img from "../assets/noHay.png"
const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error</Text>
      <Image 
        style={styles.img}
        source={img}
      />
      <Text style={styles.text}>Paso algo raro, ya hemos registrado el error, puedes recargar o volver hacia atras.</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    container:{
        height: "100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: "white",
        fontSize: 20,
        width: "80%",
        textAlign: "center"
    },
    img:{
        width: 200,
        height: 200
    }
})