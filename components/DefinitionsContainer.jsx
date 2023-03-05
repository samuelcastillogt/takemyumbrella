import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import WithoutCard from "./WithoutCard";
import CardDefinition from "./CardDefinition";
const DefinitionsContainer = () => {
  const meanings = useSelector((state) => state.counter.result[0]);
  if (!meanings) {
    return (
      <View style={styles.container}>
        <WithoutCard />
      </View>
    );
  } else {
    const numero = meanings.meanings[0].definitions.map(item => {
        if(item.example !== undefined){
             return item.example
        }else{
            console.log(item)
        }
    })
    console.log(numero)
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
          Here are some examples, try to practice...
        </Text>
        <ScrollView style={styles.container} horizontal={true}>
          {numero.map((item) => ( item != undefined && <CardDefinition content={item} key={item} />
            
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
  },
});
