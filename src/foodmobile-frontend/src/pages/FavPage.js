import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'

const Stack = createStackNavigator();

function showFavs(props){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favoritez page!</Text>
    </View>
  )
}

export default function FavPage({ navigation }) {
    const {myFavorites} =  ScreenNames.stackPages
    return (
        // <Stack.Navigator 
        //     // screenOptions={AppbarWrapper()}
        //     initialRouteName= {myFavorites.screenName}
        // >
        //   <Stack.Screen 
        //       name={myFavorites.screenName}
        //       component={showFavs} 
        //       options ={{
        //           title:myFavorites.title
        //       }}
             
        //   />
        // </Stack.Navigator>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Favoritez page!</Text>
        </View>
    
    );
}
  