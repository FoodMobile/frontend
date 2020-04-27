import React, { Component,useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Button, Text, ActivityIndicator, Colors } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import PreferencesContext from '../context/context'
import GetMapPage from './getMap'
import axios from 'axios'

export default class MapPage extends Component {
    state = {
      location: null,
      errorMessage: null,
      isGetting:'maybe',
      nearbyTrucks:[]
    };
  
    componentDidMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this._getLocationAsync();
      }

    }
  
    _getLocationAsync = async () => {
        this.setState({ isGetting:'getting...' });
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
      this.setState({ isGetting:'done' });

       //console.log('LOCATION = ',location.coords)

      
      
      try {

        console.log(location.coords)
       
        //Add truck location
        // let payloadAddTruck = new URLSearchParams();
        // payloadAddTruck.append("lat",35.8501671)
        // payloadAddTruck.append("lon",-78.8441269)
        // payloadAddTruck.append("token", this.context.userState.token)

        // console.log(payloadAddTruck)
        // const responseAddTrucks = await axios.post(
        //   `${this.context.ip}${this.context.endpoints.truckLocation}`, 
        //   payloadAddTruck
        // )
        // console.log('======= ADD TRUCKS? ======',responseAddTrucks.data)    
        
        //Get nearby trucks
        let payloadGetNearby = new URLSearchParams();
        payloadGetNearby.append("lat",location.coords.latitude)
        payloadGetNearby.append("lon",location.coords.longitude)
        const resGetNearbyTrucks = await axios.post(
          `${this.context.ip}${this.context.endpoints.getNearbyTrucks}`, 
          payloadGetNearby
        )
          
        console.log('RESPONSE(MAP) = ',resGetNearbyTrucks.data)
        this.setState({ nearbyTrucks:resGetNearbyTrucks.data });
        
      } catch(err) {
        console.log('======= BIG ERROR ======',err)
      }

     
    };
  
    render() {
      let text = 'Waiting..';
      if (this.state.errorMessage) {
        text = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
      }
  
      return (
        <View style={styles.container}>
          {
          (this.state.isGetting == 'done')?
            <React.Fragment>
              <GetMapPage location = {this.state.location} {...this.props} trucks={this.state.nearbyTrucks}/>
            </React.Fragment>
          :
            <ActivityIndicator animating={true} color={Colors.green800} size={100} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
          }
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: 5,//Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

MapPage.contextType = PreferencesContext;