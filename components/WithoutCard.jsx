import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WithoutCard = () => {
  return (
    <View style={styles.container}>
      <Text>WithoutCard</Text>
    </View>
  )
}

export default WithoutCard

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        height: 300,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    }
})