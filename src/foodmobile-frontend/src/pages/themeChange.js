import React from 'react';

import { View } from 'react-native';

import { Button,Text } from 'react-native-paper';
import PreferencesContext from '../context/context';

import TestTab from '../navigation/test/TestTab'

export default function ThemeChangePage(props) {
    const {toggleTheme } = React.useContext(
        PreferencesContext
    );

    return (
        <TestTab/>
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Home!</Text>
        //     <Button 
        //     icon="camera" 
        //     mode="contained" onPress={() => {toggleTheme()}}>
        //         Press me
        //     </Button>
        // </View>
    )
}