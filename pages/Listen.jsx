import { StyleSheet, Text, View, Alert, Button, ScrollView } from 'react-native'
import React, {useEffect, useState} from "react";

const Listen = () => {
  const [history, setHistory] = useState()
  const getHistory= async()=>{
    const response = await fetch("https://shortstories-api.onrender.com/")
    const data = await response.json()
    setHistory(data)
  }
  useEffect(()=>{
    getHistory()
  },[])
  if(!history){
    return <Text>Cargando</Text>
  }else{
     return (
      <ScrollView style={{backgroundColor: "#1f1e2c"}}>
        <View style={styles.card}>
      <Text style={styles.title}>{history.title}</Text>
      <Text>Author: {history.author}</Text>
      <Text style={styles.textContainer}>{history.story}</Text>

    </View>
      <Button 
      onPress={getHistory}
      title="Get a new history"
      />    
      </ScrollView>
    
  )
  }
 
}

export default Listen

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  textContainer: {
    padding: 5
  },
  card:{
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10
  }
})