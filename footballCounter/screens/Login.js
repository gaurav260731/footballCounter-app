import * as React from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const Login = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
      <View style={style.centered}>
          <Text style={{fontSize: 60, padding: 20}}>Welcome back</Text>
          <Text style={{fontSize: 20, marginRight: "40%", marginBottom: 10}}>Sign in to continue</Text>
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
              <Text style={{fontSize: 20, marginTop: 40}} variant="displaySmall">Don't have an account?<Text variant="displaySmall" onPress={() => navigation.navigate('Register')}>Sign Up?</Text></Text>
            </View>
      </View>
    
  );
};

const style = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        padding: 15
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
      }
  });

export default Login;