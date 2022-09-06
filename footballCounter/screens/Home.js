import React from "react";
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import { Avatar, 
  Button, 
  Card, 
  Title, 
  Paragraph, 
  BottomNavigation, 
  Text, 
  Divider, 
  List, 
  TextInput,
  DataTable,
  Checkbox } from 'react-native-paper';
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
const SearchRoute = () => 
<ScrollView>
      <TextInput
        label="Search"
        value=""
      />  
      <Tabs class="tabVal" style= {{backgroundColor: '#fff'}}>
        <TabScreen label="All">
        <View style={style.searchContainer}>
          <br/>
        <List.Item
          title="Himanshu"
          description="8.2M Followers"
          left={props => <Avatar.Image size={40} source={require('../assets/football1.jpg')} />}
          right={props => <Button mode="contained" style={style.buttonAction}>Follow</Button>}
        />
        <List.Item
          title="Himanshu Patil"
          description="5.7M Followers"
          left={props => <Avatar.Image size={40} source={require('../assets/football2.jpg')} />}
          right={props => <Button mode="contained" style={style.buttonAction}>Follow</Button>}
        />
        <List.Item
          title="Himanshu"
          description="348.3K Follower"
          left={props => <Avatar.Image size={40} source={require('../assets/football3.jpg')} />}
          right={props => <Button mode="contained" style={style.buttonAction}>Follow</Button>}
        />
      </View>
        </TabScreen>
        <TabScreen label="Article">
          <View style={style.searchContainer}>
            <List.Item
              title="Himanshu Patil's brace for ONGC sinks"
              description="MFA Elite"
              left={props => <Avatar.Image size={50} source={require('../assets/football1.jpg')} />}
              right={props => <List.Icon icon="bookmark" />}
            />
            <List.Item
              title="Himanshu Patil's brace for ONGC sinks"
              description="MFA Elite"
              left={props => <Avatar.Image size={50} source={require('../assets/football2.jpg')} />}
              right={props => <List.Icon icon="bookmark-outline" />}
            />
            <List.Item
              title="Himanshu Patil's brace for ONGC sinks"
              description="MFA Elite"
              left={props => <Avatar.Image size={50} source={require('../assets/football3.jpg')} />}
              right={props => <List.Icon icon="bookmark" />}
            />
          </View>
        </TabScreen>
        <TabScreen label="Trials">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Events">
          <View style={{ flex:1 }} />
        </TabScreen>
        {/* <TabScreen label="Question">
          <View style={{ flex:1 }} />
        </TabScreen> */}
        <TabScreen label="Fixture">
          <View style={{ flex:1 }} />
        </TabScreen>
    </Tabs>
  </ScrollView>
;

const CreateRoute =() => 
<View style={style.createContainer}>
  <List.Item
    title="Post"
    right={props => <List.Icon {...props} icon="post" />}
  />
  <List.Item
    title="Trials"
    right={props => <List.Icon {...props} icon="soccer-field" />}
  />
  <List.Item
    title="Events"
    right={props => <List.Icon {...props} icon="calendar" />}
  />
  <List.Item
    title="Query"
    right={props => <List.Icon {...props} icon="chat-question" />}
  />
  <List.Item
    title="Academy"
    right={props => <List.Icon {...props} icon="home-modern" />}
  />
  <List.Item
    title="Club"
    right={props => <List.Icon {...props} icon="home-city" />}
  />
  <List.Item
    title="Player"
    right={props => <List.Icon {...props} icon="human-handsdown" />}
  />
  <List.Item
    title="Association"
    right={props => <List.Icon {...props} icon="account-group" />}
  />
</View>;

const TournamentsRoute = () => 
<React.Fragment>
<ScrollView>
      <TextInput
        label="Search"
        value=""
      />
      <DataTable>
        <DataTable.Header>
            <DataTable.Title>
              <span style={{color: 'red'}}>LIVE</span> Matches
            </DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell><span style={{color: 'green'}}>HT <span style={{textDecoration: 'underline'}}>45</span></span> </DataTable.Cell>
          <DataTable.Cell><span style={{color: 'green'}}>HT <span style={{textDecoration: 'underline'}}>45</span></span> </DataTable.Cell>
          <DataTable.Cell><span style={{color: 'green'}}>HT <span style={{textDecoration: 'underline'}}>45</span></span> </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>AI 0</DataTable.Cell>
          <DataTable.Cell>AI 0</DataTable.Cell>
          <DataTable.Cell>AI 0</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>ONGC 0</DataTable.Cell>
          <DataTable.Cell>ONGC 0</DataTable.Cell>
          <DataTable.Cell>ONGC 0</DataTable.Cell>
        </DataTable.Row>
      </DataTable>  
      <Tabs class="tabVal" style={{backgroundColor: '#fff'}}>
      <TabScreen label="MFA">
          <Tabs class="tabVal" style= {{backgroundColor: '#fff'}}>
            <TabScreen label="Matches">
              <View>
                <List.Section style={{backgroundColor: '#fff'}}>
                  <List.Subheader>Fri, August 19 at 09:00 hrs</List.Subheader>
                  {/* <View style={{display: 'flex'}}>
                    <List.Icon icon="folder" /> 
                    <Checkbox.Item label="Kenkre FC" status="unchecked"/>
                  </View> */}
                  
                  <List.Item title="Kenkre FC" left={() => <List.Icon icon="soccer" />} />
                  <List.Item title="Footie First" left={() => <List.Icon icon="soccer" />} />
                  <List.Item title="Cooperage Stadium" left={() => <List.Icon icon="map-marker" />} />
                </List.Section>
                <List.Section style={{backgroundColor: '#fff'}}>
                  <List.Subheader>Fri, August 19 at 09:00 hrs</List.Subheader>
                  <List.Item title="Kenkre FC" left={() => <List.Icon icon="soccer" />} />
                  <List.Item title="Footie First" left={() => <List.Icon icon="soccer" />} />
                  <List.Item title="Cooperage Stadium" left={() => <List.Icon icon="map-marker" />} />
                </List.Section>
                <List.Section style={{backgroundColor: '#fff'}}>
                  <List.Subheader>Fri, August 19 at 09:00 hrs</List.Subheader>
                  <List.Item title="Kenkre FC" left={() => <List.Icon icon="soccer" />} />
                  <List.Item title="Footie First" left={() => <List.Icon icon="soccer" />} />
                  <List.Item title="Cooperage Stadium" left={() => <List.Icon icon="map-marker" />} />
                </List.Section>
              </View>
            </TabScreen>
            <TabScreen label="News">
              <View style={{ flex:1 }} />
            </TabScreen>
            <TabScreen label="Table">
              <View style={{ flex:1 }} />
            </TabScreen>
            <TabScreen label="Stats">
              <View style={{ flex:1 }} />
            </TabScreen>
            <TabScreen label="Players">
              <View style={{ flex:1 }} />
            </TabScreen>
          </Tabs>
        </TabScreen>
        <TabScreen label="ISL">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="I-league">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Santosh Trophy">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Durand Cup">
          <View style={{ flex:1 }} />
        </TabScreen>
      </Tabs>
</ScrollView>
  
</React.Fragment>;
 
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
    },
    searchContainer: {
      backgroundColor: '#fff',
      padding: '10px'
    },
    createContainer: {
      backgroundColor: '#fff'
    },
    buttonAction : {
      height: '35px',
      backgroundColor: 'rgb(51, 102, 255)',
      borderColor: 'rgb(51, 102, 255)'
    }
  });

export default Home;