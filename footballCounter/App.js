import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
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
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar } from 'react-native-paper';


const Stack = createStackNavigator();

export default function App() {
  const [showRealApp, setshowRealApp] = useState(false);

  const _onDone = () => {
    setshowRealApp(true);
  }

  const _onSkip = () => {
    setshowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
          color: '#000'
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  }

  const RenderDoneButton = () => {
    return (
      <View style={{color: 'blue', fontSize: '20px'}}>
        <Text>Get Started</Text>
      </View>
    );
  };

  const RenderNextButton = () => {
    return (
      <View style={{color: 'blue', fontSize: '20px'}}>
        <Text>Next</Text>
      </View>
    );
  };

  const RenderSkipButton = () => {
    return (
      <View style={{color: 'blue', fontSize: '20px'}}>
        <Text>Skip</Text>
      </View>
    );
  };

  return (
    <>
    {showRealApp ? 
    <>
    <ApplicationProvider {...eva} theme={eva.light} style={{width: '100%'}}>
    <PaperProvider>
      {/* <AppBar title="Football Counter" style={{ width: '100%', margin: '120' }}/>
        <View style={styles.container}>
          <Register />
        </View>  */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="Home"
            component={Home} 
            
            options={{ 
              title: <View>
                {/* <View>
                  <Text>Home</Text>
                </View> */}
                <View style={{display: 'flex'}}>
                  <Image style={{ width: 250, height: 60 }} source = {require('./assets/football-counter.png')} resizeMode='contain'/> 
                  {/* <Appbar.Action icon="bell" onPress={() => {}} style={styles.bellIcon}/> */}
                </View>
              </View>
            }}
         />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Follow Topics" component={Category} />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
    </ApplicationProvider>
    </>: 
    <AppIntroSlider 
      renderItem={RenderItem} 
      data={slides} 
      onDone={_onDone}
      showSkipButton={true}
      onSkip={_onSkip}
      dotStyle={{backgroundColor:'#000'}}
      activeDotStyle={{backgroundColor:'blue'}}
      renderDoneButton={RenderDoneButton}
      renderNextButton={RenderNextButton}
      renderSkipButton={RenderSkipButton}
    />}
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
  bellIcon: {
    alignItems: 'center'
  },
  introImageStyle: {
    width: '100%',
    height: 700,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const imageUrl = require('./assets/football1.jpg')


const slides = [
  {
    key: 's1',
    text: 'Discover and dont miss all the content you need every day',
    image: require('./assets/football1.jpg')
  },
  {
    key: 's3',
    text: 'Follow your Favourite League, Tournament, Club and Players',
    image: require('./assets/football2.jpg')
  },
  {
    key: 's4',
    text: 'Best Deals on all our services',
    image: require('./assets/football3.jpg')
  }
];
