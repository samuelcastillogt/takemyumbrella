import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WithoutCard from "./WithoutCard";
import CardDefinition from "./CardDefinition";
import Noresult from "./Noresult";
const DefinitionsContainer = () => {
  const meanings = useSelector((state) => state.counter.result[0]);
  const [examples, setExamples] = useState([])
  useEffect(()=>{
      if(meanings != undefined){
         meanings.meanings[0].definitions.map(item => {
         if(item.example != undefined){
           setExamples([...examples, item.example])
         }
       })
      }
       
       }, [meanings])
       console.log(meanings)
  if (meanings == undefined) {
    return (
      <View style={styles.container}>
        <WithoutCard />
      </View>
    );
  } else {

   
    return (
      <View>
        <Text style={styles.title}>
          There are {meanings.meanings[0].definitions.length} meanings
        </Text>
        <ScrollView style={styles.container} horizontal={true}>
          {meanings.meanings[0].definitions.map((item) => (
            <CardDefinition content={item.definition} key={item.definition} />
          ))}
        </ScrollView>
        <Text style={styles.title}>
          {examples.length > 0 && examples[0] != undefined ? "Here are some examples, try to practice..." : <Noresult />}
        </Text>
        <ScrollView style={styles.container} horizontal={true}>
          {examples.map((item) => ( item != undefined && <CardDefinition content={item} key={item} />
            
          ))}
        </ScrollView>
      </View>
    );
  }
};

export default DefinitionsContainer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
    color: "white",
  },
});
