
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Search from './components/Search';
import { Provider, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './redux/store'
import Result from './components/Result';
import Home from './pages/Home';
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>    
    <Provider store={store}>
    
  

    
     <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  </NavigationContainer>  
   
    </Provider>
</SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36393b',
    color: "white"
  },
  textWhite:{
    color: "white",
    fontWeight: "bold", 
    fontSize: 20,
    margin: 5
  }
});
