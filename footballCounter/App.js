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

  const _renderItem = ({ item }) => {
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

  const _renderDoneButton = () => {
    return (
      <View style={{color: 'blue', fontSize: '20px'}}>
        Get Started
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={{color: 'blue', fontSize: '20px'}}>
        Next
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={{color: 'blue', fontSize: '20px'}}>
        Skip
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
                <div style={{display: 'flex'}}>
                  <Image style={{ width: 250, height: 60 }} source = {require('./assets/football-counter.png')} resizeMode='contain'/> 
                  {/* <Appbar.Action icon="bell" onPress={() => {}} style={styles.bellIcon}/> */}
                </div>
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
      renderItem={_renderItem} 
      data={slides} 
      onDone={_onDone}
      showSkipButton={true}
      onSkip={_onSkip}
      dotStyle={{backgroundColor:'#000'}}
      activeDotStyle={{backgroundColor:'blue'}}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
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
    height: '700px',
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

const slides = [
  {
    key: 's1',
    text: 'Discover and dont miss all the content you need every day',
    image: {
      uri: require('./assets/football1.jpg'),
    }
  },
  {
    key: 's3',
    text: 'Follow your Favourite League, Tournament, Club and Players',
    image: {
      uri:
      require('./assets/football2.jpg'),
    }
  },
  {
    key: 's4',
    text: 'Best Deals on all our services',
    image: {
      uri:
      require('./assets/football3.jpg'),
    }
  }
];
