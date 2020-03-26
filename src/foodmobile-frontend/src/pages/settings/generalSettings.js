import * as React from 'react';
import { List } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import PreferencesContext from '../../context/context'
import { RadioButton } from 'react-native-paper';
import {useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function GeneralSettings(props) {
    const {toggleTheme,theme} = React.useContext(
        PreferencesContext
    );
    const {navigation,styles} = props
        
    return (
        <List.Section title="General">
            <List.Accordion
            title={`Apperance: ${theme}`}
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

