import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import DefinitionsContainer from '../components/DefinitionsContainer'
const Home = () => {
   
  return (
    <>
    <View style={styles.container}>
      <Search />
      
    </View>
<DefinitionsContainer />
    </>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#963484"
    }
})