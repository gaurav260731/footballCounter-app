import React, {useState} from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Button } from '@ui-kitten/components';
import OTPTextView from 'react-native-otp-textinput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  }
});

const alertText = () => {
  const {otpInput = ''} = this.state;
  if (otpInput) {
    Alert.alert(otpInput);
  }
};

const clear = () => {
  // setInput('');
  setOtpValue('');
};

const updateOtpText = () => {
  // will automatically trigger handleOnTextChange callback passed
  this.input1.setValue(this.state.inputText);
};



const Authentication = ({navigation}) => {
  const [input, setInput] = useState('');
  const [otpValue, setOtpValue] = useState('');

    return (
        <>
        <View style={style.container}>
          <OTPTextView
            ref={(e) => (setInput(e))}
            containerStyle={styles.textInputContainer}
            handleTextChange={(val) => {setOtpValue(val);}}
            inputCount={4}
            keyboardType="numeric"
          />
       
          <View style={styles.buttonWrapper} center>
            <Button style={{marginRight: 2}} mode="contained" onPress={()=> clear()}>Clear</Button>
            {/* <Button
              style={styles.buttonStyle}
              title="Update"
              onPress={this.updateOtpText}
            /> */}
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Follow Topics')}
            >Submit</Button>
          </View>
        </View>
      </>
    );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});

export default Authentication;
