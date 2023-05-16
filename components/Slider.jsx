import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
const Slider = (props) => {
    const [index, setIndex] = useState(0)
    const {data} = props
    const back = ()=>{
        if(index == 0){
            setIndex(data.length -1)
        }else{
            setIndex(index - 1)
        }
    }
    const next = ()=>{
        if(index == data.length -1){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
  return (
    <View style={styles.slider}>
    <Ionicons
             name="md-checkmark-circle"
              size={32}
              color="green"
              onPress={back}
              style={styles.botons}
            />
      <Text style={styles.card}>{props.data[index]}</Text>
      <Ionicons
              name="md-checkmark-circle"
              size={32}
              color="green"
              onPress={next}
              style={styles.botons}
            />
    </View>
  )
}
export default Slider

const styles = StyleSheet.create({
    slider:{
        height: 200,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    botons:{
        margin: 10
    },
    card:{
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    }
})