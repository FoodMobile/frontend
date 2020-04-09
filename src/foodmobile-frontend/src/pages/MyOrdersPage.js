import * as React from 'react';
import { View } from 'react-native';
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
      <Text>My orders page!</Text>
    </View>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    
  },
)}