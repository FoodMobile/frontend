import * as React from 'react';
import {useState } from 'react'
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Checkbox } from 'react-native-paper';
import PreferencesContext from '../context/context'
import { RadioButton } from 'react-native-paper';

const Stack = createStackNavigator();

function setHome({navigation}) {
    const {toggleTheme,theme} = React.useContext(
        PreferencesContext
    );

    
    return (
        <List.Section title="General Settings">
            <List.Accordion
            title="Apperance"
            // description = "General app settings"
            // left={props => <List.Icon {...props} icon="folder" />}
            >
                <List.Item
                    title={`Toggle off ${theme} mode`}
                    description="Toggle the theme of the app"
                    onPress={() => {toggleTheme()}}
                    left={
                        props =>  
                        <RadioButton.Group value={theme}>
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

function set1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>set1</Text>
      </View>
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
            <Stack.Navigator>
                <Stack.Screen name="SetHome" component={setHome} />
            </Stack.Navigator>
        );
    }
    
    
}