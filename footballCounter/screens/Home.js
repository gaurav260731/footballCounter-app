import React from "react";
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, BottomNavigation, Text, Divider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const SearchRoute = () => <Text>Search</Text>;
const CreateRoute =() => <Text>Create</Text>;
const TournamentsRoute =() => <Text>Tournaments</Text>;
const AccountsRoute =() => <Text>Accounts</Text>;

const HomeDetailRoute = () => {
  const goTo = useTabNavigation();
  const index = useTabIndex(1);
  
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Tabs class="tabVal" style= {{backgroundColor: '#fff'}}>
        <TabScreen label="Today">
        <View style={style.scrollView}>
              
              <Card style={style.cardContainer}>

                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{padding: '7px', fontSize: '18px', fontWeight: '500'}}>Santosh Trophy</div>
                  <div style={{fontSize: '13px', color: '#38dbee'}}>Follow</div>
                </div>
                
                <Divider />

                <div style={{display: 'flex', margin: '15px', alignItems: 'center'}}>
                  <Avatar.Image size={44} source={require('../assets/football2.jpg')} />
                  <div style={{padding: '7px', fontSize: '18px', fontWeight: '700'}}>Gaurav</div>
                  <div style={{fontSize: '13px', color: '#38dbee'}}>Follow</div>
                  <Appbar.Action icon="dots-horizontal" onPress={() => {}} style={style.dotIcon}/>
                </div>
                <div>
                  <div style={{marginLeft: '18%', marginTop: '-7%', fontSize: '13px', color: 'grey'}}>18m ago</div> 
                </div>
                <Card.Content >
                  <Title>Mumbai City FC complete signing of defender Sanjeev Stalin</Title>
                  <Card.Cover source={{ uri: 'https://www.footballcounter.com/wp-content/uploads/2015/09/192.jpg' }} 
                  />
                  <div style={{display: 'flex'}}>
                    <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                    <Appbar.Action icon="comment-outline" onPress={() => {}} />
                  </div>
                  <div>
                    <div style={{fontSize: '13px', color: 'grey'}}>Liked by <b>Gaurav</b> and <b>1000 others</b></div> 
                  </div>
                  <Paragraph>Mumbai City FC are delighted to confirm that the club has agreed on a deal with Kerala Blasters FC for the transfer of defender Sanjeev Stalin for an undisclosed transfer…</Paragraph>
                </Card.Content>
                <Card.Actions>  
                  <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
                </Card.Actions>
            </Card> 

            <Card style={style.cardContainer}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{padding: '7px', fontSize: '18px', fontWeight: '500'}}>Santosh Trophy</div>
                  <div style={{fontSize: '13px', color: '#38dbee'}}>Follow</div>
                </div>
                
                <Divider />

                <div style={{display: 'flex', margin: '15px', alignItems: 'center'}}>
                  <Avatar.Image size={44} source={require('../assets/football2.jpg')} />
                  <div style={{padding: '7px', fontSize: '18px', fontWeight: '700'}}>Amit Yadav</div>
                  <div style={{fontSize: '13px', color: '#38dbee'}}>Follow</div>
                  <Appbar.Action icon="dots-horizontal" onPress={() => {}} style={style.dotIcon}/>
                </div>
                <div>
                  <div style={{marginLeft: '18%', marginTop: '-7%', fontSize: '13px', color: 'grey'}}>18m ago</div> 
                </div>
              <Card.Content >
                <Title>Former India international Gouramangi Singh joins FC Goa as Assistant Coach</Title>
                <Card.Cover source={{ uri: 'https://static.footballcounter.com/wp-content/uploads/2022/07/15170937/boys-are-excited-ahead-of-the-saff-u20-Championship-says-venkatesh-832x520.jpg' }} 
                />
                <div style={{display: 'flex'}}>
                  <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                  <Appbar.Action icon="comment-outline" onPress={() => {}} />
                </div>
                <div>
                  <div style={{fontSize: '13px', color: 'grey'}}>Liked by <b>Amit</b> and <b>1000 others</b></div> 
                </div>
                <Paragraph>Mumbai, 13 July, 2022: Gouramangi Singh is the latest addition to FC Goa’s first team coaching staff following his appointment as Assistant Coach, the Club can officially confirm. “I’m delighted…</Paragraph>
                
              </Card.Content>
              <Card.Actions>  
                <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
              </Card.Actions>
            </Card>

            <Card style={style.cardContainer}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{padding: '7px', fontSize: '18px', fontWeight: '500'}}>Santosh Trophy</div>
                  <div style={{fontSize: '13px', color: '#38dbee'}}>Follow</div>
                </div>
                
                <Divider />

                <div style={{display: 'flex', margin: '15px', alignItems: 'center'}}>
                  <Avatar.Image size={44} source={require('../assets/football2.jpg')} />
                  <div style={{padding: '7px', fontSize: '18px', fontWeight: '700'}}>Gaurav</div>
                  <div style={{fontSize: '13px', color: '#38dbee'}}>Follow</div>
                  <Appbar.Action icon="dots-horizontal" onPress={() => {}} style={style.dotIcon}/>
                </div>
                <div>
                  <div style={{marginLeft: '18%', marginTop: '-7%', fontSize: '13px', color: 'grey'}}>18m ago</div> 
                </div>
              <Card.Content >
                <Title>Oscar SSE to conduct trials for Youth I-League in U13, U15&U18 category in Mumbai</Title>
                <Card.Cover source={{ uri: 'https://static.footballcounter.com/wp-content/uploads/2022/04/13180732/OSSE-Players-Cup-Winners-693x520.jpeg' }} 
                />
                <div style={{display: 'flex'}}>
                  <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                  <Appbar.Action icon="comment-outline" onPress={() => {}} />
                </div>
                <div>
                  <div style={{fontSize: '13px', color: 'grey'}}>Liked by <b>Gaurav</b> and <b>1000 others</b></div> 
                </div>
                <Paragraph>OSCAR SSE, an AIFF Accredited Academy invites all  U13, U15 & U18  players from ALL SOCIO-ECONOMIC  backgrounds for football trials to join our Elite teams to train round the year…</Paragraph>
              </Card.Content>
              <Card.Actions>  
                <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
              </Card.Actions>
            </Card>
        </View>
        </TabScreen>
        <TabScreen label="Latest">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Trending">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Trials">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Fixture">
          <View style={{ flex:1 }} />
        </TabScreen>
    </Tabs>
        
        </ScrollView>
  )
}

const Home = ({navigation}) =>{
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Home', icon: 'home', unfocusedIcon: 'home', color: 'rgb(51, 102, 255)'},
      { key: 'search', title: 'Search', icon: 'account-search', unfocusedIcon: 'account-search', color: 'rgb(51, 102, 255)'},
      { key: 'create', title: 'Create', icon: 'plus', color: 'rgb(51, 102, 255)' },
      { key: 'tournaments', title: 'Tournaments', icon: 'tournament', color: 'rgb(51, 102, 255)' },
      { key: 'account', title: 'Accounts', icon: 'account', unfocusedIcon: 'account', color: 'rgb(51, 102, 255)' },
    ]);
    const renderScene = BottomNavigation.SceneMap({
      home: HomeDetailRoute,
      search: SearchRoute,
      create: CreateRoute,
      tournaments: TournamentsRoute,
      account: AccountsRoute
    });
    return (
      <>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </>
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
    },
    cardContainer: {
      backgroundColor: '#fff',
      border: '0 solid transparent',
      borderRadius: '0.25rem',
      boxShadow: '0 8px 20px 0 rgb(218 224 235 / 60%)',
      margin: 20
    },
    tabContainer: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dotIcon: {
      width: '100%',
      justifyContent: 'flex-end',
      margin: 0
    },
    postTime: {
      marginLeft: '18%',
      marginTop: '-7%',
      fontSize: '13px',
      color: 'grey'
    }
  });

export default Home;