import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'
import Login from './Login'
import Begin from "./Begin"
import { useSelector } from 'react-redux'
import Setings from './Setings';
const Tab = createBottomTabNavigator();
const Home = () => {
   const userActive = useSelector(state => state.user.value)
   
  return (
    <>
    {
      userActive == false && <Login />
    }
    {
      userActive == true && <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "rgba(34,36,40,1)",
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Begin}
          style={styles.container}
          tabBarIcon={
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color="green"
            />
          }
        />
        <Tab.Screen name="Settings" component={Setings} />
      </Tab.Navigator>
    </NavigationContainer>
    }
    </>
    
    
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1f1e2c",
        display: "flex",
        flexDirection: "column"
    }
})