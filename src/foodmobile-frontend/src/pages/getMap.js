import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

import {getThene} from '../context/styles'

// export default class GetMapPage extends React.Component {
//   state = {
//     location: null,
//     errorMessage: null,
//   };

//   componentWillMount() {
//     if (Platform.OS === 'android' && !Constants.isDevice) {
//       this.setState({
//         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
//       });
//     } else {
//       this._getLocationAsync();
//     }
//   }

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//   };

//   render() {
//     let text = 'Waiting..';
//     if (this.state.errorMessage) {
//       text = this.state.errorMessage;
//     } else if (this.state.location) {
//       text = JSON.stringify(this.state.location);
//     }

//     return (
//       <View style={styles.containerLocation}>
//         <Text style={styles.paragraph}>{text}</Text>
//       </View>
//     );
//   }
// }

const MapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

export default class GetMapPage extends React.Component {
  render() {
    console.log(this.props.location)
    const myLocation = this.props?.location?.coords || {
      latitude:36,
      longitude:36,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    }

    return (
      <View style={styles.container}>
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
        />
        {/* list of trucks displayed on the map */}
        <View style={styles.truckListContainer}>
           <ScrollView style={styles.scrollStyle}>
              {myFoodTrucks.map((item, index) => (
                <View>
                <View
                  key = {item.name}
                  style = {styles.truckItemContainer}>
                  <Image 
                    style = {styles.icon}
                    source = {{uri: item.icon}}
                  />
                  <View style = {{flex: 1, flexDirection: 'col',}}>
                    <Text style = {styles.truckNameText}>{item.name}</Text>
                    <Text style = {styles.text}>{item.description}</Text>
                  </View> 
                </View>
                <View style = {styles.separator} />
                </View>
              ))}
           </ScrollView>
        </View>
      </View>
    );
  }
}


myFoodTrucks = [
  {
    name: 'Buoy Bowls',
    description: 'Smoothies and more',
    icon: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: 'Filafel Frenzy',
    description: 'Mediteranean food',
    icon: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: 'Rolling Thunder',
    description: 'Boston Lobster Rolls',
    icon: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

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
    flex: 2.5,
  },
  containerLocation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },
  scrollStyle: {
    backgroundColor: '#ffe373', //YELLOW
    width: Dimensions.get('window').width,
    marginBottom: 98, // might need to change if the components get bigger?
  },
  truckListContainer: {
    flex: 1,
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
  },
  truckItemContainer: {
    padding: 10,
    // marginTop: 3,
    backgroundColor: '#d9f9b1', // lime green
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
 },
  separator: {
    height: 3,
    backgroundColor: '#fff',
    width: '100%',
  },
  text: {
    fontSize: 15,
    color: '#606070',
    //padding: 10,
  },
  truckNameText: {
    fontSize: 18,
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
