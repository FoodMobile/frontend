import * as React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'
import Order from './MyOrders/Order'
// import OrdersList from './MyOrders/OrdersList'
// import ORDERS from './MyOrders/Order'

const Stack = createStackNavigator();

let ORDERS = [
  {
      customerName: 'Sophie',
      orderNumber: 1,
      truckName: "Tapioca Time",
      orderItems: [
          {
              name: "BubbleTea",
              price: 2.99,
              quantity: 1,
              notes: "",
          },
          {
              name: "Brown Sugar Bubble Tea",
              price: 4.99,
              quantity: 1,
              notes: "",
          },
      ],
  },  
  {
      customerName: 'Shah',
      orderNumber: 2,
      truckName: "Tapioca Time",
      orderItems: [
          {
              name: "Royal Milk Tea",
              price: 2.99,
              quantity: 1,
              notes: "add tapioca",
          },
      ],
  },  
  {
      customerName: 'John',
      orderNumber: 3,
      truckName: "Tapioca Time",
      orderItems: [
          {
              name: "Royal Milk Tea",
              price: 2.99,
              quantity: 2,
              notes: "",
          },
          {
              name: "Classic Bubble Tea",
              price: 4.99,
              quantity: 1,
              notes: "extra ",
          },
          {
              name: "BubbleTea",
              price: 2.99,
              quantity: 1,
          },
          {
              name: "Brown Sugar Bubble Tea",
              price: 4.99,
              quantity: 1,
          },
      ],
  }
]

export default function MyOrdersPage({ navigation }) {
    const {myOrders} =  ScreenNames.stackPages
    return (
      <ScrollView>
        {ORDERS.map((order, index) => (
          <View>
            <Text>{order.truckName}</Text>
          </View>
        ))}
      </ScrollView>
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