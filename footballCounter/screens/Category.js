import React from "react";
import { Chip, List } from 'react-native-paper';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { Button } from '@ui-kitten/components';

const DataSource = [
    "IC League", "U-15 League", "Football League", "I-League U-18", "Women's League", "Men's League", "Super League",
    "Santosh Trophy"
];


const Category = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 20, margin: 20, marginBottom: 10}}>Choose 5 or more topics to start reading and saving articles</Text>
        <List.Section title="">
        <View style={styles.row}>
            {
                DataSource.map((item, index) => {
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
        </View>
        <View style={styles.doneButtonStyle}>
          <Button
              style={styles.buttonStyle}
              mode="contained" 
              onPress={() => navigation.navigate('Home')}
          >Done</Button>
        </View>
      </List.Section>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      height: '100%'
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 12,
    },
    chip: {
      margin: 4,
    },
    buttonStyle: {
    },
    doneButtonStyle: {
      margin: 20,
      justifyContent: 'center'
    }

  });

export default Category;