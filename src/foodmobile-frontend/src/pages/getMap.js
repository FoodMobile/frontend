import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import { Text,List,Checkbox,  Avatar, Button, Card, IconButton, Colors,Title, Paragraph  } from 'react-native-paper';
//import {getThene} from '../context/styles'
import PreferencesContext from '../context/context'
import MapStyle from '../components/mapStyle'
import myFoodTrucks from '../components/data/myFoodTrucks'
import ViewMapTruck from './viewTruck/viewMapTruck'

import ScreenNames from '../screenNames'

import TruckMaker from '../components/truckMarker'

import TruckListCard from '../components/truckListCard'

const colorList = [
  Colors.red400,
  Colors.green400,
  Colors.blue400,
  Colors.yellow400,
  Colors.purple400
]

export default class GetMapPage extends React.Component {
  render() {
    
    const myLocation = this.props?.location?.coords || {
      latitude:36,
      longitude:36,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    }
    function showMapTruck(navigation,truckId,viewMapTruck) {
      //props.navigation.navigate(viewMapTruck.screenName)
      console.log(navigation.navigate('View Map Truck',{truckId:truckId}))
    }
    const {
        viewMapTruck
    } = ScreenNames.stackPages
    return (
    
      <React.Fragment>
        <MapView style={styles.mapStyle} 
          customMapStyle={MapStyle} 
          showsUserLocation={true}
          userLocationUpdateInterval={50}
          followsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          provider="google"
        >

          {
            this.props.trucks.map((value,index)=> {
              return (
                <React.Fragment key={value.x+'-'+value.y+'-'+index}>
                  <TruckMaker 
                    latitude={value.y} 
                    longitude={value.x}
                    color={colorList[index%colorList.length]}
                    name="truck"
                  />
                </React.Fragment>
              )
            })
          }
         
        </MapView>

        {/* <MapView style={styles.mapStyle} /> */}
        
        {/* list of trucks displayed on the map */}
        <ScrollView style={styles.scrollViewContainer}>
              {this.props.trucks.map((item, index) => ( 
                  <React.Fragment key = {`${item.name}-${index}`}>
                    <TruckListCard item={item} styles={styles} index={index}/>
                  </React.Fragment>  
              
            ))}
        </ScrollView>
      </React.Fragment>
    
    );
  }
}

GetMapPage.contextType = PreferencesContext;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    flex: 2,
  },
  containerLocation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },
  truckListContainer: {
    flex: 2,
    // flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    // backgroundColor: '#ffe373', //YELLOW
    //backgroundColor: '#b5acae',
    //marginBottom: 30,
  },

  scrollViewContainer: {
    flex: 1,
    // flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    // backgroundColor: '#ffe373', //YELLOW
    //backgroundColor: '#b5acae',
    //marginBottom: 10,
  },
  truckItemContainer: {
    //padding: 10,
    marginBottom: 1,
    backgroundColor: '#b3ffcc', // lime green
    //flex: 1,
    flexDirection: 'row',
    borderRadius:0
    //alignItems: 'center',
 },
 truckItemContainerDark: {
  //padding: 10,
  marginBottom: 1,
  //backgroundColor: '#927BAE', // lime green
  //flex: 1,
  flexDirection: 'row',
  borderRadius:0
  //alignItems: 'center',
},
  separator: {
    height: 3,
    backgroundColor: '#fff',
    width: '50%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    color: '#606070',
    //padding: 10,
  },
  truckNameText: {
    fontSize: 16,
    color: '#606070',
    // padding: 4,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 10,
  },
});
 