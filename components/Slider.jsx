import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import React, {useState, useEffect} from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { apiService } from '../service/api';
const Slider = (props) => {
    const [index, setIndex] = useState(0)
    const [cards, setCards] = useState()
  const [loading, setLoading] = useState(true)
  const getPosts = async()=>{
    const data = await apiService.getPosts()
    setCards(data)
    setLoading(false)
  }
  useEffect(()=>{
    getPosts()
  },[])
    const {data} = props
    const back = ()=>{
        if(index == 0){
            setIndex(cards.length -1)
        }else{
            setIndex(index - 1)
        }
    }
    const next = ()=>{
        if(index == cards.length -1){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    if(loading == true){
        return <Text>Aqui</Text>
    }else{
        return (
    <View style={styles.slider}>
    <Ionicons
             name="arrow-back-circle-sharp"
              size={32}
              color="gray"
              onPress={back}
              style={styles.botons}
            />
            <TouchableHighlight style={styles.card}  onPress={()=>{ props.nav.navigate('Post', {name: cards[index].id})}}>
                <View style={styles.card}>
                 <Text >{cards[index].data}</Text> 
               <Image style={styles.img} source= {props.data[index].img} />   
                </View>
               
            </TouchableHighlight>
      
      <Ionicons
              name="arrow-forward-circle-sharp"
              size={32}
              color="gray"
              onPress={next}
              style={styles.botons}
            />
    </View>
  )
    }
  
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