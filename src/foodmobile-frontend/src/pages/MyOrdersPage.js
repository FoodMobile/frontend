import * as React from 'react';
import { View, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator, Assets } from '@react-navigation/stack';

import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'
import Order from './MyOrders/Order'
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
// import OrdersList from './MyOrders/OrdersList'
// import ORDERS from './MyOrders/Order'

const Stack = createStackNavigator();

let ORDERS = [
  {
      customerName: 'Sophie',
      orderNumber: 1,
      truckName: "Tapioca Time",
      date: "Oct, 14",
      totalPrice: 7.98,
      orderItems: [
          {
              name: "BubbleTea",
              price: 2.99,
              quantity: 1,
              notes: "",
              picture: "",
          },
          {
              name: "Brown Sugar Bubble Tea",
              price: 4.99,
              quantity: 1,
              notes: "",
              picture: "https://s3-media0.fl.yelpcdn.com/bphoto/3MGQborVWAwtmeerJ_2_-Q/o.jpg",
          },
      ],
  },  
  {
      customerName: 'Shah',
      orderNumber: 2,
      truckName: "Tapioca Time",
      date: "Nov, 28",
      totalPrice: 2.99,
      orderItems: [
          {
              name: "Royal Milk Tea",
              price: 2.99,
              quantity: 1,
              notes: "add tapioca",
              picture: "https://i.pinimg.com/736x/b4/d6/0a/b4d60a060ebf01d9b1e3bf4c534592e8.jpg",
          },
      ],
  },  
  {
      customerName: 'John',
      orderNumber: 3,
      truckName: "Tapioca Time",
      totalPrice: 15.96,
      orderItems: [
          {
              name: "Royal Milk Tea",
              price: 2.99,
              quantity: 2,
              notes: "",
              picture: "https://i.pinimg.com/736x/b4/d6/0a/b4d60a060ebf01d9b1e3bf4c534592e8.jpg",
          },
          {
              name: "Classic Bubble Tea",
              price: 4.99,
              quantity: 1,
              notes: "extra ",
              picture: "",
          },
          {
              name: "BubbleTea",
              price: 2.99,
              quantity: 1,
              picture: "",
          },
          {
              name: "Brown Sugar Bubble Tea",
              price: 4.99,
              quantity: 1,
              picture: "https://s3-media0.fl.yelpcdn.com/bphoto/3MGQborVWAwtmeerJ_2_-Q/o.jpg",
          },
      ],
  },
  {
    customerName: 'Samantha',
    orderNumber: 2,
    truckName: "Falefal Frenzy",
    date: "Nov, 28",
    totalPrice: 12.99,
    orderItems: [
        {
            name: "Big Plate",
            price: 12.99,
            quantity: 1,
            notes: "",
            picture: "https://i.pinimg.com/736x/b4/d6/0a/b4d60a060ebf01d9b1e3bf4c534592e8.jpg",
        },
    ],
},
]

export default function MyOrdersPage({ navigation }) {
    const {myOrders} =  ScreenNames.stackPages
    return (
      <ScrollView style={styles.container}>
        {ORDERS.map((order, index) => (
          <View style={styles.order}>
          <Text style={styles.truckNameText}>{order.truckName}</Text>
          <Text style={styles.price}>{order.totalPrice}</Text>
          </View>
        ))}
      </ScrollView>
    );
}
  
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
   //flex: 1,
    //backgroundColor: '#6C5B7B', //purple
    // backgroundColor: '#FECEAB', //light tan/organge
    backgroundColor: '#EDD8ff',
  },
  // header: {
  //   fontSize: 20,
  //   alignSelf: 'center',
  //   color: '#606070',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  // },
  // row: {
  //   flex: 1,
  //   width: Dimensions.get('window').width,
  //   //backgroundColor: '#b5acae',
  //   backgroundColor: '#6C5B7B',
  //   // marginBottom: 30,
  // },
  order: {
    padding: 10,
    marginBottom: 1,
    backgroundColor: '#99B898', // lime green
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    //flexWrap: 'wrap',
    //backgroundColor: '#6C5B7B',
  },
  text: {
    fontSize: 12,
    color: '#606070',
  },
  truckNameText: {
    fontSize: 16,
    // color: '#606070',
    color: '#2A363B',
    padding: 18,
  },
  orderInfoText: {
    fontSize: 12,
    //color: '#6C5B7B',
    color: '#41344D',
    
  },
  price: {
    color: '#fff',
    textAlign: 'right',
    paddingLeft: 30,

  }
});