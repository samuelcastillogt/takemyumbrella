import { StyleSheet, Text, View, ActivityIndicator, Button, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { apiService } from '../service/api'
const TeraCards = (props) => {
  const [card, setCard] = useState()
  const [loading, setloading] = useState(true)
  const [index, setIndex] = useState(0)
  const getDataCard = async()=>{
    const data = await apiService.getCard(props.route.params.id)

    setCard(data)
    setloading(false)
  }
  const next = ()=>{
    setIndex(index +1)
  }
  const last = ()=>{
    setIndex(index - 1)
  }
  useEffect(()=>{
    getDataCard()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{loading == true ? "Cargando" : card.title}</Text>
  
      
      {
        loading == false && <Text style={styles.card}>{card.data[index]}</Text> || <ActivityIndicator size="large" color="#00ff00" />
      }
      {
        loading == false && 
      
          <View style={styles.botonera}>
        <TouchableHighlight 
      width= {50}
      style={index == 0 ? styles.btnDisable : styles.btn}
      disabled={index == 0 ? true : false}
      onPress={last}
      >
        <Text style={styles.text}>Anterior</Text>
      </TouchableHighlight>
      <Text style={styles.title}>{index + 1} / {card.data.length}</Text>
      <TouchableHighlight 
      width= {50}
      style={index == card.data.length - 1 ? styles.btnDisable : styles.btn}
      disabled={index == card.data.length - 1 ? true : false}
      onPress={next}
      >
        <Text style={styles.text}>Siguiente</Text>
      </TouchableHighlight>
      </View>
}
{  loading == false && index == card.data.length - 1 &&
        <View style={styles.botonera}>
        <TouchableHighlight 
      width= {50}
      style={index == 0 ? styles.btnDisable : styles.btn}
      disabled={index == 0 ? true : false}
      onPress={props.navigation.goBack}
      >
        <Text style={styles.text}>Regresar al menu de tarjetas</Text>
      </TouchableHighlight>
      </View>
}
    </View>
  )
}

export default TeraCards

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1f1e2c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
},
title:{
  fontSize:20,
  color: "white"
},
card:{
  backgroundColor: "white",
  width: "80%",
  height: 300,
  margin: 10,
  padding: 10,
  borderRadius: 10,
  fontSize: 15,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems:"center"
},
btn:{
  backgroundColor: "#ff7473",
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: 100
},
btnDisable:{
  backgroundColor: "#9b9b9b",
  padding: 10,
  borderRadius: 10,
  margin: 10,
  width: 100
},
botonera:{
  display: "flex",
  flexDirection:"row",
  justifyContent: "center",
  alignItems: "center"
},
text:{
  textAlign: "center"
}

})