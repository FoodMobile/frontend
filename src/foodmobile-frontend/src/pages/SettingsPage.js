import * as React from 'react';
import {useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { List } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import PreferencesContext from '../context/context'
import { RadioButton } from 'react-native-paper';
import AppbarWrapper from '../components/appBar/appBarWrapper'

import ScreenNames from '../screenNames'
import GeneralSettings from './settings/generalSettings'
import PrivacySettings from './settings/privacySettings'
import FoodPreferences from './settings/foodPreferences'

const Stack = createStackNavigator();

function settings(props) {

    return (
        <>
            <GeneralSettings {...props} styles={styles}/>
            <PrivacySettings {...props} styles={styles}/>
        </>
    );
}

export default class SettingsPage extends React.Component {
    render() {
        const {mySettings,myFoodPrefernces} = ScreenNames.stackPages
        return (  
            <Stack.Navigator 
                screenOptions={AppbarWrapper()}
                initialRouteName= {mySettings.screenName}
            >
                <Stack.Screen 
                    name={mySettings.screenName}
                    component={settings} 
                    options ={{
                        title:mySettings.title
                    }}
                  
                />
                <Stack.Screen 
                    name={myFoodPrefernces.screenName}
                    component={FoodPreferences} 
                    options ={{
                        title:myFoodPrefernces.title
                    }}
                  
                />
            </Stack.Navigator>
        );
    }
    
    
}

const preferenceStyle = {
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
}

const styles = StyleSheet.create({
    preference: preferenceStyle,
})