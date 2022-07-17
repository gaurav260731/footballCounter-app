import React from "react";
import { TextInput, Button, Card, Text } from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const Register = ({navigation}) =>{
    return (
        <View style={style.container}>
          <Text style={{fontSize: 60, padding: 20}}>Welcome user</Text>
          <Text style={{fontSize: 20, marginRight: '40%', marginBottom: 10}}>Sign up to join</Text>
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
              <Text style={{fontSize: 20, marginTop: 40}} variant="displaySmall">Have an account?<Text variant="displaySmall" onPress={() => navigation.navigate('Login')}>Sign In?</Text></Text>
            </View>
        </View>
      );
    
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    buttonAction: {
      marginTop: 10
    }
  });

export default Register;