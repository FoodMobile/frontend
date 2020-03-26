import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PreferencesContext from '../context/context'
// import { Text,AsyncStorage, View } from 'react-native';
// import PreferencesContext from '../context/context'

import {
    DarkTheme as PaperDarkTheme, // Papers dark theme.
    DefaultTheme as PaperDefaultTheme,// Papers light theme.
    //Provider as PaperProvider,
} from 'react-native-paper';

//import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme,Button } from 'react-native-paper';

//This is what we show if user is logged in
import AuthenticatedStack from './Authenticated'
//This is what we show if user is not logged in
import SigninStack from './Login'

//Our root navigatior that adds the drawer
export class  RootNavigation extends React.Component {
    render() {

        // const theme = useTheme();
        // //Find out which theam to use
        // const navigationTheme = theme.dark ? PaperDarkTheme : PaperDefaultTheme;
        let token = this.context?.userState?.token
        //console.log('token = ',token)
        return (
            <NavigationContainer theme={this.props.theme}>
                {/* If no user token,that means user needs to log in */}
                <SigninStack/>
            </NavigationContainer>
        );
    }

}

RootNavigation.contextType = PreferencesContext;




