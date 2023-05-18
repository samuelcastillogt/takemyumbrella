import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { excersiseData } from '../utils/excersices'
const Excersice = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{excersiseData[props.route.params.id].info}</Text>
    </View>
  )
}

export default Excersice

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1f1e2c",
    display: "flex",
    flexDirection: "column",
    height: "100%"
},
text:{
  fontSize: 50,
  color: "white"
}
})