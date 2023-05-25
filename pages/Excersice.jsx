import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Diario from '../components/Diario'
import ExpositionReto from '../components/ExpositionReto'
const Excersice = (props) => {
  if(props.route.params.nombre == "Diario de sintomas") return <Diario />
  if(props.route.params.nombre == "Vamos a exponernos") return <ExpositionReto />
}

export default Excersice

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1f1e2c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
},
text:{
  color: "white"
}
})


// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert } from "react-native";
// import YoutubeIframe from "react-native-youtube-iframe";

// export default function Excersice() {
//   const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === "ended") {
//       setPlaying(false);
//       Alert.alert("video has finished playing!");
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

//   return (
//     <View>
//       <YoutubeIframe
//         height={300}
//         play={playing}
//         videoId={"iee2TATGMyI"}
//         onChangeState={onStateChange}
//       />
//       <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
//   );
// }