
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Search from './components/Search';
import { Provider, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import store from './redux/store'
import Result from './components/Result';
import Home from './pages/Home';
import Listen from './pages/Listen';
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>    
    <Provider store={store}>
    
     <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {
      backgroundColor: 'rgba(34,36,40,1)',

  }, }} >
      <Tab.Screen name="Meaning" component={Home} style={styles.container} tabBarIcon={ 
              <Ionicons name="md-checkmark-circle" size={32} color="green" />  
           } />
      <Tab.Screen name="Stories" component={Listen} />
    </Tab.Navigator>
  </NavigationContainer>  
   
    </Provider>
</SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1e2c',
    color: "white"
  },
  textWhite:{
    color: "white",
    fontWeight: "bold", 
    fontSize: 20,
    margin: 5
  }
});
