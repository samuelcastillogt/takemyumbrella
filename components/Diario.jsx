import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { apiService } from '../service/api'
import imgEmpty from "../assets/empty.png"


const Diario = () => {
    const user = useSelector((state) => state.user.user)
    const [creating, setCreating] = useState(false)
    const [sintomas, setSintomas] = useState()
    const [loading, setLoading] = useState(true)
    const [text, onChangeText] = useState()
    const getAllsintomas = async () => {
        const data = await apiService.getSintomas(user.id)
        setSintomas(data)
        setLoading(false)
    }
    const saveSintoma = async () => {
        const data = await apiService.saveSintoma({
            autor: user.id,
            body: text
        })
        if (data == true) {
            setCreating(false)
            getAllsintomas()
        } else {
            Alert.alert("Ocurrio un error")
        }
    }
    useEffect(() => {
        getAllsintomas()
    }, [])
    return (
        <ScrollView style={{ height: "100%", backgroundColor: "#1f1e2c" }}>
            <View style={styles.container}>
                <Text style={styles.text}>Diario de Sintomas</Text>
                {
                    creating == false && <Button style={styles.button} title='Registra tu sintoma' onPress={() => setCreating(true)} />
                }
                {
                    creating == true && <View>
                        <Text style={styles.text}>Crear un nuevo registro</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={styles.textarea}
                            autoFocus={true}
                            onChangeText={onChangeText}
                            placeholder='Ejemplo: Hoy me senti mareado, me detuve un momento, el panico llego 2 minutos despues y duro 45 segundos'
                        />
                        <Button title="Registrar Sintoma" onPress={saveSintoma} />
                    </View>
                }
                {
                    loading == true && <ActivityIndicator size={'large'} color={"green"} />
                }
                {
                    loading == false && sintomas.length == 0 && <View style={styles.otherContainer}>
                        <Image source={imgEmpty} style={styles.img} />
                        <Text style={styles.text}>Parece que no hay registros</Text>
                    </View>
                }
                {
                    loading == false && sintomas.length > 0 && sintomas.map((item, index) => {
                        return (
                            <View key={index} style={index % 2 == 0 ? styles.card : styles.card2}>
                                <Text style={index % 2 == 0 ? styles.textCard : styles.text2}>{item.data.fecha}</Text>
                                <Text style={index % 2 == 0 ? styles.textCard : styles.text2}>{item.data.body}</Text>
                            </View>
                        )
                    })
                }




            </View>



        </ScrollView>

    )
}

export default Diario

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1f1e2c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    otherContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 40
    },
    text2: {
        color: "black",
        fontSize: 15
    },
    textarea: {
        backgroundColor: "white",
        width: 300,
        height: 150,
        borderRadius: 10,
        margin: 10
    },
    img: {
        width: 250,
        height: 200
    },
    textCard: {
        color: "white",
        fontSize: 15
    },
    card: {
        backgroundColor: " linear-gradient(90deg, rgba(143,150,255,1) 35%, rgba(55,50,210,1) 100%)",
        padding: 10,
        width: "90%",
        borderRadius: 10,
        margin: 10
    },
    card2: {
        backgroundColor: "white",
        padding: 10,
        width: "90%",
        borderRadius: 10,
        margin: 10
    },
    button: {

    }
})