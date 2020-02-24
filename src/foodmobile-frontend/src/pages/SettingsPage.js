import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GeneralSettings from './settings/generalSettings'
import PrivacySettings from './settings/privacySettings'


export default class SettingsPage extends React.Component {
    render() {
        return (  
            <>
                <GeneralSettings {...this.props} styles={styles}/>
                <PrivacySettings {...this.props} styles={styles}/>
            </>   
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