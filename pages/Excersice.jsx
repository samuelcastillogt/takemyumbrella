import { StyleSheet, Text, View } from 'react-native'
// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe"

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
//       <YoutubePlayer
//         height={300}
//         play={playing}
//         videoId={"iee2TATGMyI"}
//         onChangeState={onStateChange}
//       />
//       <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
//   );
// }

import React from 'react'
import { excersiseData } from '../utils/excersices'
const Excersice = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{excersiseData[props.route.params.id].info}</Text>
    </View>
  )
}

export default Excersice

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1f1e2c",
    display: "flex",
    flexDirection: "column",
    height: "100%"
},
text:{
  fontSize: 50,
  color: "white"
}
})