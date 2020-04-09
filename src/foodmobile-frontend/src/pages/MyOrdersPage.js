import * as React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'

const Stack = createStackNavigator();

function showOrders(props){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My orders page!</Text>
    </View>
  )
}

export default function MyOrdersPage({ navigation }) {
    const {myOrders} =  ScreenNames.stackPages
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <ScrollView style={styles.container}>
              {Orders.map((order, index) => ( 
                <View
                  key = {order.name}
                  >
                  <View style = {{flex: 1, flexDirection: 'column',}}>
                  <Text>texting</Text>
                    {/* <Text style = {styles.orderName}>{item.order}</Text>
                    <Text style = {styles.text}>{item.description}</Text> */}
                  {/* </View> 
                </View>
            ))} */}
        {/* </ScrollView> */} 
      </View>
    );
}
  
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1
  },
  row: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#b5acae',
    // marginBottom: 30,
  },
  order: {
    padding: 10,
    marginBottom: 1,
    backgroundColor: '#d9f9b1', // lime green
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#606070',
  },
});