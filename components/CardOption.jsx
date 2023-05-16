import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const CardOption = (props) => {
  return (
    
    <TouchableHighlight  onPress={()=>{ props.nav.navigate('Categorie', {name: props.item.title})}}>
<View style={props.index %2 == 0 ? styles.card : styles.card2}>
        <View style={props.index %2 == 0 ? styles.adorno : styles.adorno2}></View>
      <Text style={styles.text}>{props.item.title}</Text>
</View>
    </TouchableHighlight>
    
    
  )
}

export default CardOption

const styles = StyleSheet.create({
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