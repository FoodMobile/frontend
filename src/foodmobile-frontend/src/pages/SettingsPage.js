import * as React from 'react';
import {useState } from 'react'
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Checkbox } from 'react-native-paper';
import PreferencesContext from '../context/context'
import { RadioButton } from 'react-native-paper';
import AppbarWrapper from '../components/appBar/appBarWrapper'
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
                    left={
                        props =>  
                        <RadioButton.Group value={theme} {...props}>
                            <View>
                                <RadioButton.Item value="light" onPress={() => {toggleTheme()}}/>
                            </View>
                        </RadioButton.Group>
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
        return (  
            <Stack.Navigator 
                screenOptions={AppbarWrapper()}
            >
                <Stack.Screen name="SetHome" component={setHome} />
            </Stack.Navigator>
        );
    }
    
    
}