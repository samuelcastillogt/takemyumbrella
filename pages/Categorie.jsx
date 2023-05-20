import { StyleSheet, Text, View, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native'
import React from 'react'
import {apiService} from '../service/api'
import { useEffect } from 'react'
import { useState } from 'react'
import Error from '../components/Error'
const Categorie = (props) => {
  const [cards, setCards] = useState()
  const [loading, setLoading] = useState(true)
  const getCard = async()=>{
    const data = await apiService.getCards(props.route.params.name)
    setCards(data)
    setLoading(false)
  }
  useEffect(()=>{
    getCard()
  },[])
  return (
    <View style={{backgroundColor: "#1f1e2c", paddingTop: 30, height: "100%"}}>
      <Text style={styles.title}>Categoria: {props.route.params.name}</Text> 
      <ScrollView >
        {
          loading == true && <ActivityIndicator size="large" color="#00ff00" />
        }
        {
          loading == false && cards && cards.length > 0 &&  cards.map((item, index)=>{
           return(
            <TouchableHighlight  onPress={()=>{ props.navigation.navigate('TeraCards', {id: item.id})}} 
                                  style={props.index %2 == 0 ? styles.card : styles.card2}
                                  key={item.id}
                                  >
          <View >
                  <View style={props.index %2 == 0 ? styles.adorno : styles.adorno2}></View>
                <Text style={styles.text}>{item.data}</Text>
          </View>
              </TouchableHighlight>
           ) 
          }) 
        }
        {
          loading == false && cards && cards.length == 0 && <Error />
        }
    </ScrollView> 
    </View>
    
  )
}

export default Categorie

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        padding: 10
    },
    card:{
      width: 150,
      height: 100,
      backgroundColor: "rgba(143, 150, 255, 0.4)",
      margin: 10,
      borderRadius: 10,
      display: "flex",
      justifyContent: "flex-end"
  },
  card2:{
      width: 150,
      height: 100,
      backgroundColor: "rgba(255, 144, 125, 1)",
      margin: 10,
      borderRadius: 10,
      display: "flex",
      justifyContent: "flex-end"
  },
  text:{
      color: "white",
      fontWeight: "bold",
      marginBottom: 10,
      marginLeft: 10
  },
  adorno:{
      backgroundColor: "#9ea5ff",
      position: "absolute",
      top: 0,
      height: 50,
      width: 50,
      right: 0,
      borderBottomLeftRadius: 100
  },
  adorno2:{
      backgroundColor: "#ffa092",
      position: "absolute",
      top: 0,
      height: 50,
      width: 50,
      right: 0,
      borderBottomLeftRadius: 100
  }
})