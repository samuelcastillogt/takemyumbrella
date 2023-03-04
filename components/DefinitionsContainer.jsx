import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import WithoutCard from './WithoutCard'
import CardDefinition from './CardDefinition'
const DefinitionsContainer = () => {
    const meanings = useSelector(state => state.counter.result[0])
    console.log(meanings.definitions)
    if(!meanings.meanings){
        return (
            <View style={styles.container}>
      <WithoutCard />
    </View>
        )
    }else{
       return (
    <View>
      {meanings.meanings.map(item => <CardDefinition content={item.definitions.definition}/>)}  
      
    </View>
  ) 
    }
    
}

export default DefinitionsContainer

const styles = StyleSheet.create({
    container:{
        padding: 10
    }
})