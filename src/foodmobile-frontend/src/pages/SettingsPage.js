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

const Stack = createStackNavigator();

function setHome({navigation}) {
    const {toggleTheme,theme} = React.useContext(
        PreferencesContext
    );
    
    return (
        <List.Section title="General Settings">
            <List.Accordion
            title="Apperance"
            description = "Change how the app looks"
            left={props => <List.Icon {...props} icon="cogs" />}
            >
                <List.Item
                    title={`Toggle off ${theme} mode`}
                    description="Toggle the theme of the app"
                    onPress={() => {toggleTheme()}}
                    right={
                        props =>  
                        <View style={styles.preference}>
                            <View pointerEvents="none">
                                <Switch value={theme === 'dark'} />
                            </View>
                        </View>
                    }
                />
            </List.Accordion>
        </List.Section>
    );
}

export default class SettingsPage extends React.Component {
    state = {
        expanded: true
    }
    
    _handlePress = () =>
        this.setState({
        expanded: !this.state.expanded
    });
    
    render() {
        const {mySettings} = ScreenNames.stackPages
        return (  
            <Stack.Navigator 
                screenOptions={AppbarWrapper()}
                initialRouteName= {mySettings.screenName}
            >
                <Stack.Screen 
                    name={mySettings.screenName}
                    component={setHome} 
                    options ={{
                        title:mySettings.title
                    }}
                />
            </Stack.Navigator>
        );
    }
    
    
}

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})