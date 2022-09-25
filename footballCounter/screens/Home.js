import React, { useState } from "react";
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import { Avatar, 
  Button, 
  Card, 
  Title, 
  Paragraph, 
  BottomNavigation,
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
<>
      <TextInput
        label="Search"
        value=""
      />  
      
      <Tabs class="tabVal" style= {{backgroundColor: '#fff'}}>
        <TabScreen label="All">
        <View style={style.searchContainer}>
        <ScrollView>
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
        </ScrollView>
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
  </>;


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
<>
      <TextInput
        label="Search"
        value=""
      />
      <DataTable>
        <DataTable.Header>
            <DataTable.Title>
              <Text style={{color: 'red'}}>LIVE</Text> Matches
            </DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell><Text style={{color: 'green'}}>HT <Text style={style.textDecoration}>45</Text></Text> </DataTable.Cell>
          <DataTable.Cell><Text style={{color: 'green'}}>HT <Text style={style.textDecoration}>45</Text></Text> </DataTable.Cell>
          <DataTable.Cell><Text style={{color: 'green'}}>HT <Text style={style.textDecoration}>45</Text></Text> </DataTable.Cell>
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
                <ScrollView>
                <List.Section style={{backgroundColor: '#fff'}}>
                  <List.Subheader>Fri, August 19 at 09:00 hrs</List.Subheader>
                  <View style={style.displayFlex}>
                    <List.Icon icon="folder" /> 
                    <Checkbox.Item label="Kenkre FC" status="unchecked"/>
                  </View> 
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
                </ScrollView>
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
</>;
 
const AccountsRoute =() => 
<React.Fragment>
  <View style={style.accountFlex}>
    <Avatar.Image style= {{marginTop: 15}} size={84} source={require('../assets/football1.jpg')} />
    <View style={{width: '80%', padding: 20, textAlign: 'left'}}>
      <Text style={{fontSize: 20, fontWeight:'400'}}>Amit Yadav</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>Founder & Chief of growth @Kodewise Technologies</Text>
    </View>
  </View>
  <DataTable.Row >
       <DataTable.Cell><Text style={{fontSize: 21}}>53</Text> Posts</DataTable.Cell>
       <DataTable.Cell><Text style={{fontSize: 21}}>37</Text> Followers</DataTable.Cell>
       <DataTable.Cell><Text style={{fontSize: 21}}>46</Text> Following</DataTable.Cell>
   </DataTable.Row>
  <Tabs class="tabVal" style= {{backgroundColor: '#fff'}}>
        <TabScreen label="My Posts">
        <View>
        <Card style={{padding: 10}}>
          <View style={{display: 'flex', flexDirection:'row-reverse'}}>
            <Avatar.Image size={60} source={require('../assets/football1.jpg')} />
            <View style={{width: '85%', padding: 20, textAlign: 'left'}}>
              <Text style={{color: 'grey'}}>Santosh Trophy</Text>
              <Text>Hero 75th NFC for Santosh Trophy to be held in Malappuram from April 16...</Text>
              <Text style={{color:'blueviolet'}}>more..</Text>
              <View style={style.likeFlexAccount}>
                <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                <Appbar.Action icon="comment-outline" onPress={() => {}} />
              </View>
              <Text style={{fontSize: 13, color: 'grey'}}>Liked by Amit and 1000 others</Text> 
            </View>
          </View>
        </Card>

        </View>
        </TabScreen>
        <TabScreen label="Activity">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Saved">
          <View style={{ flex:1 }} />
        </TabScreen>
        <TabScreen label="Insight">
          <View style={{ flex:1 }} />
        </TabScreen>
      </Tabs>
</React.Fragment>;

const HomeDetailRoute = () => {
  const goTo = useTabNavigation();
  const index = useTabIndex(1);

  const followText = useState('Follow');

  const navigation = useNavigation();

  return (
    <>
    
      <Tabs class="tabVal" style= {{backgroundColor: '#fff'}}>
        <TabScreen label="Today">
        <ScrollView>
              <Card style={style.cardContainer}>

                <View style={style.displayFlex}>
                  <Text style={{padding: 7, fontSize: 18, fontWeight: '500'}}>Santosh Trophy</Text>
                  <Text style={{fontSize: 13, color: '#38dbee'}}>Follow</Text>
                </View>
                
                <Divider />

                <View style={style.profileFlex}>
                  <Avatar.Image size={44} source={require('../assets/football2.jpg')} />
                  <Text style={{padding: 7, fontSize: 18,fontWeight: '700'}}>Gaurav</Text>
                  <Text style={{fontSize: 13, color: '#38dbee'}}>Follow</Text>
                  <Appbar.Action icon="dots-horizontal" onPress={() => {}} style={style.dotIcon}/>
                </View>
                <View style={style.timeAgo}>
                  <Text>18m ago</Text> 
                </View>
                <Card.Content >
                  <Title>Mumbai City FC complete signing of defender Sanjeev Stalin</Title>
                  <Card.Cover source={{ uri: 'https://www.footballcounter.com/wp-content/uploads/2015/09/192.jpg' }} 
                  />
                  <View style={style.displayFlex}>
                    <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                    <Appbar.Action icon="comment-outline" onPress={() => {}} />
                  </View>
                  <View>
                    <Text style={{fontSize: 13, color: 'grey'}}>Liked by Amit and 1000 others</Text> 
                  </View>
                  <Paragraph>Mumbai City FC are delighted to confirm that the club has agreed on a deal with Kerala Blasters FC for the transfer of defender Sanjeev Stalin for an undisclosed transfer…</Paragraph>
                </Card.Content>
                <Card.Actions>  
                  <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
                </Card.Actions>
             </Card> 

             <Card style={style.cardContainer}>

                <View style={style.displayFlex}>
                  <Text style={{padding: 7, fontSize: 18, fontWeight: '500'}}>Santosh Trophy</Text>
                  <Text style={{fontSize: 13, color: '#38dbee'}}>Follow</Text>
                </View>
                
                <Divider />

                <View style={style.profileFlex}>
                  <Avatar.Image size={44} source={require('../assets/football2.jpg')} />
                  <Text style={{padding: 7, fontSize: 18,fontWeight: '700'}}>Gaurav</Text>
                  <Text style={{fontSize: 13, color: '#38dbee'}}>Follow</Text>
                  <Appbar.Action icon="dots-horizontal" onPress={() => {}} style={style.dotIcon}/>
                </View>
                <View style={style.timeAgo}>
                  <Text>18m ago</Text> 
                </View>
                <Card.Content >
                  <Title>Mumbai City FC complete signing of defender Sanjeev Stalin</Title>
                  <Card.Cover source={{ uri: 'https://www.footballcounter.com/wp-content/uploads/2015/09/192.jpg' }} 
                  />
                  <View style={style.displayFlex}>
                    <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                    <Appbar.Action icon="comment-outline" onPress={() => {}} />
                  </View>
                  <View>
                    <Text style={{fontSize: 13, color: 'grey'}}>Liked by Gaurav and 1000 others</Text> 
                  </View>
                  <Paragraph>Mumbai City FC are delighted to confirm that the club has agreed on a deal with Kerala Blasters FC for the transfer of defender Sanjeev Stalin for an undisclosed transfer…</Paragraph>
                </Card.Content>
                <Card.Actions>  
                  <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
                </Card.Actions>
             </Card> 

             <Card style={style.cardContainer}>

                <View style={style.displayFlex}>
                  <Text style={{padding: 7, fontSize: 18, fontWeight: '500'}}>Santosh Trophy</Text>
                  <Text style={{fontSize: 13, color: '#38dbee'}}>Follow</Text>
                </View>
                
                <Divider />

                <View style={style.profileFlex}>
                  <Avatar.Image size={44} source={require('../assets/football2.jpg')} />
                  <Text style={{padding: 7, fontSize: 18,fontWeight: '700'}}>Gaurav</Text>
                  <Text style={{fontSize: 13, color: '#38dbee'}}>Follow</Text>
                  <Appbar.Action icon="dots-horizontal" onPress={() => {}} style={style.dotIcon}/>
                </View>
                <View style={style.timeAgo}>
                  <Text>18m ago</Text> 
                </View>
                <Card.Content >
                  <Title>Mumbai City FC complete signing of defender Sanjeev Stalin</Title>
                  <Card.Cover source={{ uri: 'https://www.footballcounter.com/wp-content/uploads/2015/09/192.jpg' }} 
                  />
                  <View style={style.displayFlex}>
                    <Appbar.Action icon="thumb-up-outline" onPress={() => {}} />
                    <Appbar.Action icon="comment-outline" onPress={() => {}} />
                  </View>
                  <View>
                    <Text style={{fontSize: 13, color: 'grey'}}>Liked by Gaurav and 1000 others</Text> 
                  </View>
                  <Paragraph>Mumbai City FC are delighted to confirm that the club has agreed on a deal with Kerala Blasters FC for the transfer of defender Sanjeev Stalin for an undisclosed transfer…</Paragraph>
                </Card.Content>
                <Card.Actions>  
                  <Button onPress={() => navigation.navigate('Details')}>read more..</Button>
                </Card.Actions>
             </Card> 

            </ScrollView>
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
    
        </>
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
      
    },
    cardContainer: {
      backgroundColor: '#fff',
      border: '0 solid transparent',
      borderRadius: 1,
      boxShadow: '0 8px 20px 0 rgb(218 224 235 / 60%)',
      margin: 20
    },
    tabContainer: {
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
      padding: 10
    },
    createContainer: {
      backgroundColor: '#fff'
    },
    buttonAction : {
      height: 35,
      backgroundColor: 'rgb(51, 102, 255)',
      borderColor: 'rgb(51, 102, 255)'
    },
    displayFlex:{  
      flex: 1,  
      flexDirection: 'row', 
      alignItems: 'center'
    },
    profileFlex : {
      flex: 1,  
      flexDirection: 'row', 
      alignItems: 'center',
      margin: 5
    },
    timeAgo:{
      marginLeft: '15%', 
      marginTop: '-5%', 
      fontSize: 13, 
      color: 'grey'
    },
    textDecoration: {
      textDecorationLine: "underline"
    },
    likeFlexAccount : {
      flex: 1,  
      flexDirection: 'row', 
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 15
    },
    accountFlex : { 
      flexDirection: 'row',
      padding: 10
    }

  });

export default Home;