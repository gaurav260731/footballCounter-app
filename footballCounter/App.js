import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar } from "@react-native-material/core";
import AppIntroSlider from 'react-native-app-intro-slider';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from './screens/Home';
import  Details  from './screens/Details';
import  Register  from './screens/Register';
import Authentication from './screens/Authentication';
import Category from './screens/Category';
import Login from './screens/Login';


const Stack = createStackNavigator();

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/football1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/football2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/football3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export default function App() {
  const [showRealApp, setshowRealApp] = useState(true);

  const _renderItem = ({ item }) => {
    return (
      <View >
        <Text >{item.title}</Text>
        <Image source={item.image} />
        <Text >{item.text}</Text>
      </View>
    );
  }
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setshowRealApp(true);
  }

  return (
    <>
    {showRealApp ? 
    <>
    <PaperProvider>
      {/* <AppBar title="Football Counter" style={{ width: '100%', margin: '120' }}/>
        <View style={styles.container}>
          <Register />
        </View>  */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Follow Topics" component={Category} />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
    </>: 
    <AppIntroSlider renderItem={()=>{ _renderItem}} data={slides} onDone={()=> this._onDone}/>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
