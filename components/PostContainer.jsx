import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import RenderHtml from 'react-native-render-html';
const PostContainer = (props) => {

    const source = {
        html:props.item.body,
        
      };
  return (
    <View style={styles.container}>
       <ScrollView >
        <Image source={{uri:props.item.imgDes}} style={styles.img}/>
      <Text style={styles.titulo}>{props.item.title}</Text>
      {/* <Text >{props.item.body}</Text> */}
      <View style={styles.body}>
        <RenderHtml
      contentWidth={300}
      source={source}
      emSize= {15}
        enableExperimentalBRCollapsing= {true}
    />
      </View>
      
    </ScrollView> 
    </View>
    
  )
}

export default PostContainer

const styles = StyleSheet.create({
    container:{
        width: "90%",
        display: "flex",
        alignItems: "center",
        marginTop: 30
    },
    titulo:{
        fontSize: 23,
        color: "white",
        fontWeight: "bold",
        padding: 5
    },
    img:{
        width: 200,
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    body:{
        width: "94%",
        color: "white",
        fontSize: 15,
        marginBottom: 30,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
    }
})