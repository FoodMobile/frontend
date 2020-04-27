import React from 'react';
import { Marker } from 'react-native-maps';
import { View} from 'react-native';
import {  Button,Colors} from 'react-native-paper';
//import {getThene} from '../context/styles'

export default class TruckMaker extends React.Component{
    render() {
        return (
            <Marker coordinate={{
                latitude: this.props.latitude,//36.0689 ,
                longitude:  this.props.longitude//-79.8102
              }}
            >
              <View >
                
                <Button mode="text" color={this.props.color} icon="truck-check" onPress={() => console.log('Pressed')}>
                    {/* {this.props.name} */}
                </Button>
              </View>
            </Marker>
        )
    }
}