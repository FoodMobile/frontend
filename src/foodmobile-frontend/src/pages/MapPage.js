import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'

const Stack = createStackNavigator();

function showMap(props){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favoritez page!</Text>
    </View>
  )
}

export default function MapPage({ navigation }) {
    const {map} =  ScreenNames.stackPages
    return (
        <Stack.Navigator 
            screenOptions={AppbarWrapper()}
            initialRouteName= {map.screenName}
        >
          <Stack.Screen 
              name={map.screenName}
              component={showMap} 
              options ={{
                  title:map.title
              }}
          />
        </Stack.Navigator>
    
    );
}
  