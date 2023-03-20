import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_RESULT, SET_WORD } from '../redux/word.slice'
const Search = () => {
    const state = useSelector(state => state.counter.word)
    const dispatch = useDispatch()
    const setWord =(e)=>{
        dispatch(SET_WORD(e))
    }
    const getWord = async()=>{
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + state)
      const data = await response.json()
      dispatch(SET_RESULT(data))
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoy quiero practicar con ...</Text>
      <TextInput style={styles.input} onChangeText={setWord}/>
      <View style={{borderRadius: 5,
        margin: 10,
        padding: 20,
        backgroundColor: "#3066BE"}}>
        <Button 
      title="Let`s go..."
      onPress={getWord}
      style={{borderRadius: 5,
        margin: 10,
        padding: 20,
        backgroundColor: "#3066BE"}}
      />
    </View>
      </View>
      
  )
}

export default Search

const styles = StyleSheet.create({
    input:{
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 9,
        width: 250,
        height: 50
    },
    button:{
      borderRadius: 5,
      margin: 10,
      backgroundColor: "#3066BE"
    },
    title:{
        fontSize:20,
        fontWeight: "bold",
        color: "white",
      margin: 5
    }, 
    container:{
      height: 250,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
})