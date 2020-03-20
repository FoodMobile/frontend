import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GeneralSettings from './settings/generalSettings'
import PrivacySettings from './settings/privacySettings'

import { Button,Text } from 'react-native-paper';
import PreferencesContext from '../context/context'
import {getData,storeData} from '../components/asyncStorage'


export default function SettingsPage(props) {
   
    const {signOut,userState}  = React.useContext(
        PreferencesContext
    );
    
    return (  
        <>
            <GeneralSettings {...props} styles={styles}/>
            <PrivacySettings {...props} styles={styles}/>
            <Button onPress={()=>signOut()} mode="contained">
                <Text>Logout</Text>
            </Button>
            <Text>{JSON.stringify(userState.userToken)}</Text>
        </>   
    );

}

const preferenceStyle = {
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
}

const styles = StyleSheet.create({
    preference: preferenceStyle,
})