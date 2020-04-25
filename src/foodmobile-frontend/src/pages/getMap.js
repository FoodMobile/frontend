import React from 'react';
import MapView from 'react-native-maps';
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
        />
        {/* <MapView style={styles.mapStyle} /> */}
        
        {/* list of trucks displayed on the map */}
        <ScrollView style={styles.scrollViewContainer}>
              {myFoodTrucks.map((item, index) => ( 
              
                <Card style = {this.context.theme=='light'?styles.truckItemContainer: styles.truckItemContainerDark} key = {`${item.name}-${index}`}>
                  <Card.Title 
                    title={item.name}
                    subtitle={item.description} 
                    key = {item.name}
                    icon = {item.icon}
                    left={
                      (props) => 
                      <Avatar.Image 
                        {...props} 
                        size={41} 
                        source={{ uri: item.icon }} 
                      />}
                  />
                  <Card.Content>
                    {/* <Title>Card title</Title> */}
                    <Paragraph>{item.distance} miles away</Paragraph>
                  </Card.Content>
                  {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                  <Card.Actions>
                    
                    <IconButton
                      icon={ index%2 ==0? "heart-outline": "heart"}
                      color={Colors.yellow600}
                      size={25}
                      onPress={() => console.log('Pressed')}
                      
                    />
                    <Button 
                      onPress={()=> {
                        showMapTruck(this.props.navigation,item.id,viewMapTruck)
                      }}
                    >
                      View
                    </Button>
                  </Card.Actions>
                </Card>
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
    backgroundColor: '#b5acae',
    //marginBottom: 30,
  },

  scrollViewContainer: {
    flex: 1,
    // flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    // backgroundColor: '#ffe373', //YELLOW
    backgroundColor: '#b5acae',
    marginBottom: 10,
  },
  truckItemContainer: {
    //padding: 10,
    marginBottom: 1,
    backgroundColor: '#d9f9b1', // lime green
    //flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
 },
 truckItemContainerDark: {
  //padding: 10,
  marginBottom: 1,
  backgroundColor: '#927BAE', // lime green
  //flex: 1,
  flexDirection: 'row',
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
 