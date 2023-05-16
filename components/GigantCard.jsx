import { StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import React from 'react'

const GigantCard = (props)=>{
    console.log(props)
  return (
    <TouchableHighlight style={styles.card} onPress={()=>{
        props.nav.navigate('Profile', {name: 'Jane'})
    }}>
      <Text>GigantCard</Text>
    </TouchableHighlight>
  )
}
export default GigantCard
const styles = StyleSheet.create({
    card:{
        width: "90%",
        height: 150,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        padding: 10
    }
})