import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import PreferencesContext from '../context/context'
import ScreenNames from '../screenNames'

export default function LoginPage({ navigation }) {
    const {login} =  ScreenNames.stackPages

    const {signIn} = React.useContext(
        PreferencesContext
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={()=>{signIn()}}>
                <Text>Login2</Text>
            </Button>
        </View>
    
    );
}
  