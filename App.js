import { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import auth from '@react-native-firebase/auth'
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Home />
        </Provider>
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1e2c",
    color: "white",
  },
  textWhite: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
  },
});
