import { StyleSheet, Text, View,TouchableHighlight, Image } from 'react-native'
import React from 'react'
import img from "../assets/11.png"
const GigantCard = (props)=>{
    console.log(props)
  return (
    <TouchableHighlight style={styles.card} onPress={()=>{
        props.nav.navigate('Profile', {name: 'Jane'})
    }}>
      <View style={styles.content}>
       <Text>GigantCard</Text>
      <Image source= {img} style={styles.img}/> 
      </View>
      
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
        padding: 10,
        display: "flex",
        justifyContent: "space-around",
    },
    content:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
      
    },
    img:{
      width: 100,
      height: 130
    }
})