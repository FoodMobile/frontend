import React, { Component,useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Button, Text, ActivityIndicator, Colors } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import GetMapPage from './getMap'


export default class MapPage extends Component {
    state = {
      location: null,
      errorMessage: null,
      isGetting:'maybe'
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
              <GetMapPage location = {this.state.location} {...this.props}/>
              <Button 
                compact = {true} 
                mode="contained" 
                color="dodgerblue"
                onPress={()=>{this._getLocationAsync()}}
                style={{ borderRadius: 0,}}
              >
                  Reset map
              </Button>
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
    paddingTop: 5,//Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});