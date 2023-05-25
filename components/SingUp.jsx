import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const SingUp = (props) => {
    console.log(props)
  const [nombre, setNombre] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const singUpData = async () => {
    setError(false);
    console.log(nombre, email, pass);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false)
      setError("Debe ingresar un correo electronico valido");
    if (pass.length < 8)
      setError("La Contraseña debe tener 8 caracrteres como minimo");
    if (nombre.length < 4)
      setError("El Nombre de usuario debe tener 4 caracrteres como minimo");
    const mail = email.toLowerCase();
    console.log(error);
    if (error == false) {
      const response = await fetch(
        "https://serverumbrella.vercel.app/auth/singup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: mail,
            pass,
            nombre,
          }),
        }
      );
      const data = await response.json();
      console.log(data)
      if(data != false){
        props.setSingUp(false)
        props.setLogin(true)
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crear una cuenta</Text>
      <TextInput
        placeholder={"Nombre de Usuario"}
        style={styles.input}
        onChangeText={setNombre}
        secureTextEntry={false}
      />
      <TextInput
        placeholder={"Email"}
        style={styles.input}
        onChangeText={setEmail}
        secureTextEntry={false}
      />
      <TextInput
        placeholder={"Contraseña"}
        style={styles.input}
        onChangeText={setPass}
        secureTextEntry={true}
      />
      {error != false && <Text style={styles.error}>{error}</Text>}
      <Button title="Crear una cuenta" onPress={singUpData} />
    </View>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: 30,
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    padding: 10,
    borderRadius: 10,
    width: 250,
    margin: 5,
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
