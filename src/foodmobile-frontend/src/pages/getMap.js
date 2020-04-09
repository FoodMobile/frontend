// import React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, View, Dimensions, Image } from 'react-native';
// import Constants from 'expo-constants';
// import { ScrollView } from 'react-native-gesture-handler';
// import { Text } from 'react-native-paper';
// import {getThene} from '../context/styles'

// import MapStyle from '../components/mapStyle'


// export default class GetMapPage extends React.Component {
//   render() {
//     console.log(this.props.location)
//     const myLocation = this.props?.location?.coords || {
//       latitude:36,
//       longitude:36,
//       latitudeDelta: 0.00922,
//       longitudeDelta: 0.00421,
//     }

//     return (
//       <View style={styles.container}>
//         <MapView style={styles.mapStyle} 
//           customMapStyle={MapStyle} 
//           showsUserLocation={true}
//           userLocationUpdateInterval={50}
//           followsUserLocation={true}
//           showsMyLocationButton={true}
//           initialRegion={{
//             latitude: myLocation.latitude,
//             longitude: myLocation.longitude,
//             latitudeDelta: 0.00922,
//             longitudeDelta: 0.00421,
//           }}
//           provider="google"
//         />
//         {/* list of trucks displayed on the map */}
//         <ScrollView style={styles.truckListContainer}>
//               {myFoodTrucks.map((item, index) => ( 
//                 <View
//                   key = {item.name}
//                   style = {styles.truckItemContainer} 
//                   >
//                   <Image style = {styles.icon} source = {{uri: item.icon}} />
//                   <View style = {{flex: 1, flexDirection: 'column',}}>
//                     <Text style = {styles.truckNameText}>{item.name}</Text>
//                     <Text style = {styles.text}>{item.description}</Text>
//                   </View> 
//                 </View>
//             ))}
//         </ScrollView>
//       </View>
//     );
//   }
// }


// myFoodTrucks = [
//   {
//     name: 'Tasty Bowls',
//     description: 'Smoothies and more',
//     icon: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
//   {
//     name: 'Filafel Frenzy',
//     description: 'Mediteranean food',
//     icon: "https://randomuser.me/api/portraits/men/47.jpg",
//   },
//   {
//     name: 'Rolling Thunder',
//     description: 'Boston Lobster Rolls',
//     icon: "https://randomuser.me/api/portraits/men/13.jpg",
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     height: Dimensions.get('window').height,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     // height: Dimensions.get('window').height,
//     flex: 2.5,
//   },
//   containerLocation: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     //paddingTop: Constants.statusBarHeight,
//     // backgroundColor: '#ecf0f1',
//   },
//   truckListContainer: {
//     flex: 1,
//     // flexWrap: 'wrap',
//     width: Dimensions.get('window').width,
//     // backgroundColor: '#ffe373', //YELLOW
//     backgroundColor: '#b5acae',
//     marginBottom: 30,
//   },
//   truckItemContainer: {
//     padding: 10,
//     marginBottom: 1,
//     backgroundColor: '#d9f9b1', // lime green
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//  },
//   separator: {
//     height: 3,
//     backgroundColor: '#fff',
//     width: '50%',
//     alignSelf: 'center',
//   },
//   text: {
//     fontSize: 12,
//     color: '#606070',
//     //padding: 10,
//   },
//   truckNameText: {
//     fontSize: 16,
//     color: '#606070',
//     // padding: 4,
//   },
//   icon: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     alignSelf: 'center',
//     marginRight: 10,
//   },
// });

import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
//import {getThene} from '../context/styles'

import MapStyle from '../components/mapStyle'
//import myFoodTrucks from '../components/data/myFoodTrucks'

const myFoodTrucks = [
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
  {
      name: 'Hungry Hippos',
      description: 'Smoothies and more',
      icon: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
      name: 'Toilet Thunder',
      description: 'Mediteranean food',
      icon: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
      name: 'Corono Beer',
      description: 'Boston Lobster Rolls',
      icon: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

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
      <ScrollView style={styles.truckListContainer}>
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
        
              {myFoodTrucks.map((item, index) => ( 
                <View
                  key = {item.name}
                  style = {styles.truckItemContainer} 
                >
                  <Image style = {styles.icon} source = {{uri: item.icon}} />
                  <View style = {{flex: 1, flexDirection: 'column',}}>
                    <Text style = {styles.truckNameText}>{item.name}</Text>
                    <Text style = {styles.text}>{item.description}</Text>
                  </View> 
                </View>
            ))}
 
      </View>
      </ScrollView>
    );
  }
}

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
    // flexWrap: 'wrap',
  },
  // containerLocation: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   //paddingTop: Constants.statusBarHeight,
  //   // backgroundColor: '#ecf0f1',
  // },
  truckListContainer: {
    flex: 3,
    // flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    // backgroundColor: '#ffe373', //YELLOW
    backgroundColor: '#b5acae',
    // marginBottom: 30,
  },
  truckItemContainer: {
    padding: 10,
    marginBottom: 1,
    backgroundColor: '#d9f9b1', // lime green
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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

