import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardDefinition = (props) => {
  return (
    <View>
      <Text>{props.content}</Text>
    </View>
  )
}

export default CardDefinition

const styles = StyleSheet.create({})