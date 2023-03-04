import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Result() {
    const word = useSelector(state => state.counter)

  return (
    <View>
      <Text style={{color: "white", fontSize:30}}>{word.word}</Text>
      <Text>dsads</Text>
    </View>
  )
}

const styles = StyleSheet.create({})