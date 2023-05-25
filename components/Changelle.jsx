import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Changelle = (props) => {
  return (
    <View style={props.index%2 == 0 ? styles.card: styles.card2}>
    <Text style={styles.titleCard}>{props.item.titulo}</Text>
    <Text style={styles.text}>{props.item.body}</Text>
</View>
  )
}

export default Changelle

const styles = StyleSheet.create({
    titleCard:{
        color:"white",
        fontSize: 20
    },
    card:{
        width: "90%",
        backgroundColor: "rgba(143, 150, 255, 0.4)",
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    card2:{
        width: "90%",
        backgroundColor: "rgba(255, 144, 125, 1)",
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    text:{
        color: "white",
        width: "80%"
      },
})