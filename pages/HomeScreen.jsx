import { StyleSheet, Text, View, Alert, Button, ScrollView, SafeAreaView } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from "react";
import Slider from '../components/Slider';
import CarruselOptions from '../components/CarruselOptions';
import GigantCard from '../components/GigantCard';
import Login from './Login';
import { dataScroll } from '../utils/slider';
const Stack = createNativeStackNavigator();
const HomeScreen = (props) => {
  // const getHistory= async()=>{
  //   const response = await fetch("https://shortstories-api.onrender.com/")
  //   const data = await response.json()
  //   setHistory(data)
  // }
  // useEffect(()=>{
  //   getHistory()
  // },[])

     return (
      <ScrollView style={{backgroundColor: "#1f1e2c", paddingTop: 30}}>
        <Slider data={dataScroll}/>
        <CarruselOptions nav={props.navigation}/>
        <GigantCard  nav={props.navigation}/>
      </ScrollView>
    
  )
 
}

export default HomeScreen

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
    margin: 10,
  },
  container:{
     display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 100
  }
})