import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useRef, useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_SESION, SET_USER } from '../redux/user.slice'


const LoginForm = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const sendData = async()=>{
        setError(false)
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) setError(true);
        const mail = email.toLowerCase()
    const response =   await fetch('https://serverumbrella.vercel.app/auth/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({ 
    email: mail,
    pass
  }),
})
const data = await response.json()
if(data == false){
    setError(true)
}else{
    dispatch(SET_USER(data))
    dispatch(SET_SESION(true))
}
    }
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Iniciar Sesion</Text>
        <TextInput placeholder={'Email'} style={styles.input} onChangeText={setEmail}/>
        <TextInput placeholder={'Contraseña'} style={styles.input} onChangeText={setPass} secureTextEntry={true}/>
        {
            error == true && <Text style={styles.error}>Correo o contraseña erronea</Text>
        }
        <Button title="Iniciar Sesion" onPress={sendData}/>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    container:{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: "white",
        fontSize: 20,
        marginTop: 30
    },
    input:{
        backgroundColor: "white",
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
        width: 250,
        margin: 5
    }, 
    error:{
        color: "red",
        fontSize: 16
    } 
})