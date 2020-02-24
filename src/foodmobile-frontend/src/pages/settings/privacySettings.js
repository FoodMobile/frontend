import * as React from 'react';
import { List ,Colors } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import PreferencesContext from '../../context/context'
import { RadioButton } from 'react-native-paper';
import {useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenNames from '../../screenNames'

export default function PrivacySettings(props) {
    const {toggleTheme,theme} = React.useContext(
        PreferencesContext
    );
    
    const {navigation,styles } = props
    const {myFoodPrefernces,myWallet} = ScreenNames.stackPages
    return (
        <List.Section title="Privacy" >
            <List.Accordion
            title="My Profile"
            description = "Control private settings"
            left={props => <List.Icon {...props} color = {Colors.blue500}  icon="account" />}
            >
                <List.Item
                    title="Food Preferences"
                    description="Set perferred food or allergies"
                    onPress={() => {navigation.navigate(myFoodPrefernces.screenName)}}
                    right={
                        props =>  
                        <View style={styles.preference}/>
                    }
                />
            </List.Accordion>
            <List.Item
                style={styles.preference}
                title="Wallet"
                description="Transaction methods"
                onPress={() => {navigation.navigate(myWallet.screenName)}}
                
                left={props => <List.Icon{...props} color = {Colors.green500} icon="cash-usd" />}
            />
        </List.Section>
    );
}