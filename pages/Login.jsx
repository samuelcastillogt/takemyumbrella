import { StyleSheet, Text, View, Button, TouchableHighlight, Alert } from 'react-native'
import React from 'react'
import { SET_SESION } from '../redux/user.slice'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm'
import SingUp from '../components/SingUp'
import { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState(false)
    const [singUp, setSingUp] = useState(false)
  return (
    <View style={styles.loginContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.textStyles}>Iniciar Sesion</Text>  
            <Button
            style={styles.botton} 
            title='Iniciar Sesion'
            onPress={()=> setLogin(true)}
            />
            <TouchableHighlight style={styles.botton} onPress={()=> setSingUp(true)} >
                <Text style={styles.buttonText}>Crear una Cuenta</Text>
            </TouchableHighlight>
            
        </View>
    {
        login == true && <LoginForm />
    }
    {
        singUp == true && <SingUp setLogin={setLogin} setSingUp={setSingUp}/>
    }
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginContainer:{        
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    textContainer:{
        color: "white",
        backgroundColor: "#34314c",
        height: "40%",
        width: "100%",
        borderTopRightRadius: 150,
        borderTopLeftRadius: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyles :{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10
    },
    botton:{
        backgroundColor: "#ff7473",
        padding: 10,
        borderRadius: 10,
        margin: 10
    },
    buttonText:{
        color: "white"
    }
})