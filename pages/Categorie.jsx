import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Categorie = (props) => {
  return (
    <View style={{backgroundColor: "#1f1e2c", paddingTop: 30, height: "100%"}}>
      <Text style={styles.title}>Categoria: {props.route.params.name}</Text> 
      <ScrollView >
      <Text>Hola</Text>
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
    }
})