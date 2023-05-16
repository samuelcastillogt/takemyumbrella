import { StyleSheet, Text, View, Button, TouchableHighlight, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [alerta2, setAlerta] = useState(false)
    const alerta = ()=> Alert.alert("jajajaja")
  return (
    <View style={styles.loginContainer}>
        {
            alerta2 == true && <Text>Hola</Text>
        }
        <Text>{alerta2}</Text>
        <View style={styles.textContainer}>
            <Text style={styles.textStyles}>Login</Text>  
            <Button
            style={styles.botton} 
            title='Iniciar Sesion'
            onPress={alerta}
            />
            <TouchableHighlight style={styles.botton} onPress={alerta}>
                <Text>Iniciar Sesion</Text>
            </TouchableHighlight>
        </View>

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
        height: "50%",
        width: "100%",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyles :{
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    botton:{
        backgroundColor: "#ff7473",
        padding: 10,
        borderRadius: 10
    }
})