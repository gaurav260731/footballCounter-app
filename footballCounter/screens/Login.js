import * as React from 'react';
import { TextInput, Text } from 'react-native-paper';
import {View, StyleSheet, Image} from 'react-native';
import { Button } from '@ui-kitten/components';

const Login = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
      <>
      <View style={style.imageContainer}>
        <Image source={require('../assets/football-counter.png')} style={style.image} />
      </View>
      
      <View style={style.centered}>
          <Text style={{fontSize: 60, padding: 20}}>Welcome back</Text>
          <Text style={{fontSize: 20, marginRight: "40%", marginBottom: 10, color: 'grey'}}>Sign in to continue</Text>
          <View style={style.widthContainer}>
            <TextInput
                mode="outlined"
                label="Username, Mobile number, or Email"
                placeholder="Type something"
                right={<TextInput.Affix text="" />}
            />
            <TextInput
                mode="outlined"
                label="Password"
                placeholder="Type something"
                right={<TextInput.Affix text="" />}
            />
          </View>
            
            <View style={style.buttonContainer}>
                <Button style={style.buttonAction} mode="contained" onPress={() => navigation.navigate('Follow Topics')}>Login</Button>
            </View>

            <View>   
              <Text style={{fontSize: 20, marginTop: 45, color: 'grey'}} variant="displaySmall">Don't have an account?  
              <Text variant="displaySmall" onPress={() => navigation.navigate('Register')}> Sign Up</Text></Text>
            </View>
      </View>
      </>
  );
};

const style = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 0
      },
      widthContainer: {
        width: '90%'
      },
      buttonContainer: {
          marginTop: 12,
          width: '50%'
      },
      buttonAction: {
        marginTop: 10
      },
      image: {
        width: 90,
        height: 90,
        marginLeft: 10
        
      },
      imageContainer: {
        backgroundColor: 'white',
        width: '100%'
      }
  });

export default Login;