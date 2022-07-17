import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const Home = ({navigation}) =>{
    return (
      <ScrollView>
        <View style={style.scrollView}>
         
          <Card>
          <Card.Content >
              <Title>Mumbai City FC complete signing of defender Sanjeev Stalin</Title>
              <Card.Cover source={{ uri: 'https://www.footballcounter.com/wp-content/uploads/2015/09/192.jpg' }} 
              />
              <Paragraph>Mumbai City FC are delighted to confirm that the club has agreed on a deal with Kerala Blasters FC for the transfer of defender Sanjeev Stalin for an undisclosed transfer…</Paragraph>
            </Card.Content>
            <Card.Actions>  
              <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
            </Card.Actions>
          </Card>

          <Card>
            <Card.Content >
              <Title>Former India international Gouramangi Singh joins FC Goa as Assistant Coach</Title>
              <Card.Cover source={{ uri: 'https://static.footballcounter.com/wp-content/uploads/2022/07/15170937/boys-are-excited-ahead-of-the-saff-u20-Championship-says-venkatesh-832x520.jpg' }} 
              />
              <Paragraph>Mumbai, 13 July, 2022: Gouramangi Singh is the latest addition to FC Goa’s first team coaching staff following his appointment as Assistant Coach, the Club can officially confirm. “I’m delighted…</Paragraph>
            </Card.Content>
            <Card.Actions>  
              <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
            </Card.Actions>
          </Card>

          <Card>
            <Card.Content >
              <Title>Oscar SSE to conduct trials for Youth I-League in U13, U15&U18 category in Mumbai</Title>
              <Card.Cover source={{ uri: 'https://static.footballcounter.com/wp-content/uploads/2022/04/13180732/OSSE-Players-Cup-Winners-693x520.jpeg' }} 
              />
              <Paragraph>OSCAR SSE, an AIFF Accredited Academy invites all  U13, U15 & U18  players from ALL SOCIO-ECONOMIC  backgrounds for football trials to join our Elite teams to train round the year…</Paragraph>
            </Card.Content>
            <Card.Actions>  
              <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
            </Card.Actions>
          </Card>
          
        </View>
        </ScrollView>
      );
    
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView : {
      overflowY: 'scroll'
    }
  });

export default Home;