import * as React from 'react';
import { View, AsyncStorage,RefreshControl,ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
// import GetCameraPage from './testCameraPage' 
// import GetMapPage from './testMapPage'
import ShowLocation from './testShowLoc'
function mapHome() {

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My map page!</Text>
    </View>
  )
}

// function mapCam() {
//   return(
//     <GetCameraPage/>
//   )
// }

// function mapLoc() {
//   return(
//     <GetMapPage/>
//   )
// }

export default function MapPage({ navigation }) {
    const {map} =  ScreenNames.stackPages
    return (
      <Tab.Navigator>
        <Tab.Screen name="Map Home" component={mapHome} />
        <Tab.Screen name="Map Location" component={ShowLocation} />
        {/* <Tab.Screen name="Map Cam" component={mapCam} /> */}
        {/* <Tab.Screen name="Map Loc" component={mapLoc} /> */}
      </Tab.Navigator>
    );
}
  