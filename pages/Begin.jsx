import { StyleSheet, Text, View, Alert, Button, ScrollView, SafeAreaView } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useEffect, useState} from "react";
import Login from './Login';
import HomeScreen from "./HomeScreen"
import Categorie from './Categorie';
import Excersice from './Excersice';
import TeraCards from './TeraCards';
import Post from './Post';
const Stack = createNativeStackNavigator();
const Begin = () => {

     return (
      <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen name="Profile" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Categorie" component={Categorie} options={{headerShown:false}}/>
      <Stack.Screen name="Excersice" component={Excersice} options={{headerShown:false}}/>
      <Stack.Screen name="TeraCards" component={TeraCards} options={{headerShown:false}}/>
      <Stack.Screen name="Post" component={Post} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
 
}

export default Begin

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