import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Excersice = () => {
  return (
    <View>
      <Text>Excersice</Text>

    </View>
  )
}

export default Excersice

const styles = StyleSheet.create({})


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