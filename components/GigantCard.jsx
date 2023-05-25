import { StyleSheet, Text, View,TouchableHighlight, Image } from 'react-native'
import React from 'react'
import img from "../assets/11.png"
import img2 from "../assets/22.png"
import img3 from "../assets/33.png"
const ejercicios =[
  {
    title: "Vamos a exponernos",
    img: img
  },
  {
    title: "Diario de sintomas",
    img: img2
  },
  {
    title: "Comprende la ansiedad",
    img: img3
  }
]
const GigantCard = (props)=>{
  return (
    <View style={{marginBottom: 30}}>
      {
        ejercicios.map((item, index)=>
          <TouchableHighlight style={index %2 == 0 ? styles.card : styles.card2} onPress={()=>{
        props.nav.navigate('Excersice', {id: index, nombre: item.title})
        }}
        key={index}
        >
      <View style={styles.content}>
       <Text>{item.title}</Text>
      <Image source= {item.img} style={styles.img}/> 
      </View>
      
    </TouchableHighlight>
      )
      }
    </View>
    
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
    card2:{
      width: "90%",
      height: 150,
      backgroundColor: " linear-gradient(90deg, rgba(143,150,255,1) 35%, rgba(55,50,210,1) 100%)",
      margin: 10,
      borderRadius: 10,
      padding: 10,
      display: "flex",
      flexDirection: "column-reverse",
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