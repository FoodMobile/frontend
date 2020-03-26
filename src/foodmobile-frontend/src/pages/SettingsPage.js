import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GeneralSettings from './settings/generalSettings'
import PrivacySettings from './settings/privacySettings'


import { Button,Text,Card,Title, DarkTheme,Provider,DefaultTheme } from 'react-native-paper';
import PreferencesContext from '../context/context'
import {getData,storeData} from '../components/asyncStorage'


export default function SettingsPage(props) {
   
    const {signOut,userState,theme}  = React.useContext(
        PreferencesContext
    );
 
    
    return (  
        <>
            <GeneralSettings {...props} styles={styles}/>
            <PrivacySettings {...props} styles={styles}/>
            <Button onPress={()=>signOut()} mode="contained">
                <Text>Logout</Text>
            </Button>

            <Provider  theme = {theme=='light'? DarkTheme:DefaultTheme} >
                <Card style={{margin:15,padding:5}} theme={DarkTheme} elevation={115}>
                
                    <Title>Saved token data</Title>
                    <Card.Content>
                        <Text>User token: {JSON.stringify(userState)}</Text>
                    </Card.Content>
                </Card>
            </Provider>
            
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