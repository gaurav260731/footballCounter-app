import React from "react";
import { Chip, List } from 'react-native-paper';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { Button } from 'react-native-paper';

const dataSource = [
    "IC League", "U-15 League", "Football League", "I-League U-18", "Women's League", "Men's League", "Super League",
    "Santosh Trophy", "Football Events", "Colaba Super League", "SSE Champions League", "IFS League", "Local Football", "Borivalli Premier League"
    , "Local Football"
];


const Category = ({navigation}) => {
    return (
        <>
        <Text style={{fontSize: 20, marginRight: '40%', marginBottom: 10}}>Choose 5 or more topics to start reading and saving articles</Text>
        <List.Section title="">
        <View style={styles.row}>
            {
                dataSource.map((item, index) => {
                return (
                <Chip
                    key={index}
                    style={styles.chip}
                    mode="outlined"
                    onPress={() => console.log(item)}> 
                    {item}
                </Chip>
                )
               })
            }
            <Button
                style={styles.buttonStyle}
                mode="contained" 
                onPress={() => navigation.navigate('Home')}
            >Done</Button>
        </View>
           
      </List.Section>
      </>
    )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 12,
    },
    chip: {
      margin: 4,
    },
    buttonStyle: {
        marginTop: 10,
        margin: 'auto',
        width: '75%'
    }
  });

export default Category;