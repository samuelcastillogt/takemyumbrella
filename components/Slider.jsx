import { StyleSheet, Text, View, Image } from 'react-native'
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
            <View style={styles.card}>
               <Text >{props.data[index].titulo}</Text> 
               <Image style={styles.img} source= {props.data[index].img} />
            </View>
      
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
        color: "white",
        backgroundColor: "rgba(143, 150, 255, 1)",
        borderRadius: 10,
        height: "70%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    card2:{
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    img:{
        width: 100,
        height: 130
      }
})