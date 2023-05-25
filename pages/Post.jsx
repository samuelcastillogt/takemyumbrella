import { StyleSheet, Text, View, ActivityIndicator, Button, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { apiService } from '../service/api'
import PostContainer from '../components/PostContainer'

const Post = (props) => {
    const [post, setPost] = useState()
    const [loading, setloading] = useState(true)
    const getDataPost = async()=>{
      const data = await apiService.getPost(props.route.params.name)
      setPost(data)
      setloading(false)
    }

    useEffect(()=>{
        getDataPost()
      },[])
  return (
    
    <View style={styles.container}>
        {
        loading == true ? <ActivityIndicator size="large" color="#00ff00" /> : <PostContainer item={post}/>
        }
      
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1f1e2c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
})