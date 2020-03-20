import * as React from 'react';
import { StyleSheet, Dimensions, View, AsyncStorage,RefreshControl,ScrollView } from 'react-native';
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
    <View style={styles.container}>
      {/* { flex: 1, alignItems: 'center', justifyContent: 'center' } */} 
      <View style={styles.mapContainer}>
        <Text>The actual map should go here</Text> 
      </View>
      <View style={styles.truckListContainer}>
        <Text>this is where the list of trucks will go</Text> 
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  mapContainer: {
    flex: 3,
    // flexWrap: 'wrap',
    backgroundColor: '#ffab00', // orange
    alignItems: 'center',
    justifyContent:'center',
  },
  truckListContainer: {
    flex: 1,
    // flexWrap: 'wrap',
    backgroundColor: '#adbab5', //greyish color
  },
});


