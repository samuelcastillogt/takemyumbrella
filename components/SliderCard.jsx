import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SliderCard = () => {
  return (
    <View style={styles.card}>
      <Text>SliderCard</Text>
    </View>
  )
}

export default SliderCard

const styles = StyleSheet.create({
    card:{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})