import * as React from 'react';
import { List ,Colors } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import PreferencesContext from '../../context/context'
import { RadioButton } from 'react-native-paper';
import {useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Text,Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenNames from '../../screenNames'
import RequestToBeDriver from '../settings/requestToBeDriver'

export default function PrivacySettings(props) {
    const {toggleTheme,theme,userState} = React.useContext(
        PreferencesContext
    );
    

    const {navigation,styles } = props
    const {myFoodPrefernces,myWallet,editCompanyMenu,addTruck} = ScreenNames.stackPages
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

                <RequestToBeDriver {...props} styles={styles}/>

            </List.Accordion>
            <Divider/>
            <List.Item
                style={styles.preference}
                title="Wallet"
                description="Transaction methods"
                onPress={() => {navigation.navigate(myWallet.screenName)}}
                
                left={props => <List.Icon{...props} color = {Colors.green500} icon="cash-usd" />}
            />
            {
                userState.userData.isDriver?
                <React.Fragment>
                    <Divider/>
                    <List.Item
                        style={styles.preference}
                        title="Edit menu"
                        description="Add/remove/edit items to the trucks menu"
                        onPress={() => {navigation.navigate(editCompanyMenu.screenName)}}
                        
                        left={props => <List.Icon{...props} color = {Colors.purple400} icon="food" />}
                    />
                    <List.Item
                        style={styles.preference}
                        title="Create Truck"
                        description="Add a truck to the company"
                        onPress={() => {navigation.navigate(addTruck.screenName)}}
                        
                        left={props => <List.Icon{...props} color = {Colors.orange400} icon="plus" />}
                    />
                </React.Fragment>
                :
                <React.Fragment></React.Fragment>
            }
            
        </List.Section>
    );
}