import React from "react";
import { TextInput, Card, Text } from 'react-native-paper';
import {View, StyleSheet, Image} from 'react-native';
import { Button } from '@ui-kitten/components';

const Register = ({navigation}) =>{
    return (
      <>
        <View style={style.imageContainer}>
          <Image source={require('../assets/football-counter.png')} style={style.image} />
        </View>
        <View style={style.container}>
          <Text style={{fontSize: 60, padding: 20}}>Welcome user</Text>
          <Text style={{fontSize: 20, marginRight: '40%', marginBottom: 10, color: 'grey'}}>Sign up to join</Text>
          <TextInput
            label="Email or Mobile Number"
            mode="outlined"
            style={{ width: 300 }}
            />
           <TextInput
          label="Full Name"
          secureTextEntry={true}
          mode="outlined"
          style={{ width: 300 }}
          />
           <TextInput
          label="Username"
          secureTextEntry={true}
          mode="outlined"
          style={{ width: 300 }}
          />
          <TextInput
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          style={{ width: 300 }}
          />
          <Button
                style={style.buttonAction}
                mode="contained"
                onPress={() => navigation.navigate('Authentication')}
            >Sign Up</Button>
            <View>   
              <Text style={{fontSize: 20, marginTop: 40, color: 'grey'}} variant="displaySmall">Have an account?
              <Text variant="displaySmall" onPress={() => navigation.navigate('Login')}> Sign In</Text></Text>
            </View>
        </View>
      </>
      );
    
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    buttonAction: {
      marginTop: 10,
      width: '50%'
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

export default Register;