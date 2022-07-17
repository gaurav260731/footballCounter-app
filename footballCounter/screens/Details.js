import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Details = () =>{
    return (
        <View>
         <Card>
          <Card.Content>
            <Title>Day 4 of The IFS-League of Champions</Title>
            <Paragraph>Sunday, 11 December 2016: An action packed Day 4 of IFS-League of Champions came to a closure at Andheri Sports Complex. A total of 12 matches were played in the…</Paragraph>
          </Card.Content>
          </Card>

          
        </View>
      );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Details;