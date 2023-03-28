import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import DefinitionsContainer from '../components/DefinitionsContainer'
const Home = () => {
   
  return (
    <ScrollView style={{backgroundColor: "#1f1e2c"}}>
    <View style={styles.container}>
      <Search />
      
    </View>
<DefinitionsContainer style={styles.container}/>
    </ScrollView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1f1e2c"
    }
})