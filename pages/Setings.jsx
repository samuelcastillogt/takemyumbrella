import { StyleSheet, Text, View, CheckBox } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Setings = () => {
  const user = useSelector((state)=> state.user.user)
  return (
    <View>
      <Text style={styles.text}>{user.nombre}</Text>
       <Text>Modo Obscuro</Text>
    </View>
  )
}

export default Setings

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    marginTop: 30,
    color: "red"
  }
})