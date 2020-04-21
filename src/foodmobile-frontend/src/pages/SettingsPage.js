import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GeneralSettings from './settings/generalSettings'
import PrivacySettings from './settings/privacySettings'

import {ScrollView,View} from 'react-native';

import { 
    Button,Text,Card,Title, DarkTheme,Provider,DefaultTheme,Divider ,
    Paragraph, Dialog, Portal
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import {getData,storeData} from '../components/asyncStorage'
import RequestToBeDriver from './settings/requestToBeDriver'

export default function SettingsPage(props) {
   
    const {signOut,userState,theme}  = React.useContext(
        PreferencesContext
    );

    const [showDialog,setDialog] = React.useState(false)

    const _showDialog = () => setDialog(true);

    const _hideDialog = () => setDialog(false);
    
    function askIfSignout() {
        _showDialog()
    }
    
    return (  
        <ScrollView>
            <GeneralSettings {...props} styles={styles}/>
            <Divider style={{padding:1}}/>

            <PrivacySettings {...props} styles={styles}/>

            <Divider style={{marginBottom:15,padding:1}}/>
            
            <RequestToBeDriver {...props} styles={styles}/>

            <Button color = '#dd0000'onPress={()=>askIfSignout()} mode="contained" style={styles.button}>
                <Text>Logout</Text>
            </Button>

            <Provider  theme = {theme=='light'? DarkTheme:DefaultTheme} >
                <Card style={{marginLeft:15, marginRight:15,padding:5}} theme={DarkTheme} elevation={115}>
                
                    <Title>Saved token data</Title>
                    <Card.Content>
                        <Text>User token: {JSON.stringify(userState)}</Text>
                    </Card.Content>

                </Card>

                <Card style={{margin:15,padding:5}} theme={DarkTheme} elevation={115}>
                    <Title>Saved user data</Title>
                    <Card.Content >
                        <Text>User token: {JSON.stringify(userState.userData)}</Text>
                    </Card.Content>     
                </Card>
            </Provider>

            <Portal>
                <Dialog
                visible={showDialog}
                onDismiss={_hideDialog}
                >
                    <Dialog.Title>Do you want to logout?</Dialog.Title>
                    {/* <Dialog.Content>
                        <Paragraph>This is simple dialog</Paragraph>
                    </Dialog.Content> */}
                    <Dialog.Actions>
                        
                        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Button color = "#00aa00" onPress={_hideDialog}>Cancel</Button>
                            <Button color = "#ff0000" onPress={signOut}>Logout</Button>
                        </View>
                    </Dialog.Actions>
                   
                </Dialog>
            </Portal>
            
        </ScrollView>   
    );

}

const preferenceStyle = {
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
}

const styles = StyleSheet.create({
    preference: preferenceStyle,
    button: {
        marginBottom:15,
        marginLeft:5,
        marginRight:5
    },
})