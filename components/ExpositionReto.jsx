import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Changelle from './Changelle'
import challenges from "../utils/challengers"
const ExpositionReto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retos de exposicion</Text>
        <Text style={styles.text}>Estos retos estan pensados para realizarse durante la exposicion. Si no logras terminar uno no te preocupes, esto es un proceso y cada dia es una etapa.</Text>
        <ScrollView style={{width: "100%"}}>
            {
                challenges.map((item, index) => <Changelle item={item} key={item.body} index={index}/>)
            }
            
        </ScrollView>
    </View>
  )
}

export default ExpositionReto

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1f1e2c",
        display: "flex",
        flexDirection: "column",

        // justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    text:{
      color: "white",
      width: "80%"
    },
    title:{
        color:"white",
        fontSize: 20,
        marginTop: 50,
        fontWeight: "bold"

    },
    titleCard:{
        color:"white",
        fontSize: 20
    },
    card:{
        width: "80%",
        backgroundColor: "red",
        margin: 10,
        borderRadius: 10,
        padding: 10
    }
})