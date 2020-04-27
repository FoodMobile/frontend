import * as React from 'react';
import { 
    Button,Subheading,
    Divider, Text
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import { View,ScrollView } from 'react-native';


export default class CreateTruck extends React.Component {
    render() {
        return (
            <Text>  CREATE TRUCK</Text>
        )
    }
}

CreateTruck.contextType = PreferencesContext;