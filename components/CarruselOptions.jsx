import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CardOption from './CardOption'
import categories from '../utils/categories'
const CarruselOptions = (props) => {

  return (
    <ScrollView
    horizontal={true}
    style={styles.carrusel}
    >
        {
            categories.map((item, index)=> <CardOption item={item} key={index} index={index} nav={props.nav}/>)
        }
    </ScrollView>
  )
}

export default CarruselOptions

const styles = StyleSheet.create({
    carrusel:{
        margin: 10,
        marginLeft: 0
    }
})