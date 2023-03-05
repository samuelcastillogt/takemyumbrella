import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardDefinition = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.content}</Text>
    </View>
  )
}

export default CardDefinition

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        height: 300,
        width: 300,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        margin: 10,
        padding:10,
        fontFamily:"bebas"
    }
})