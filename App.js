import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
export default function App() {

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
