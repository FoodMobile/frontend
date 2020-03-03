import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
import { Text,AsyncStorage, View } from 'react-native';
import PreferencesContext from '../context/context'

import {
    DarkTheme as PaperDarkTheme, // Papers dark theme.
    DefaultTheme as PaperDefaultTheme,// Papers light theme.
    //Provider as PaperProvider,
} from 'react-native-paper';
//import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme,Button } from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AuthenticatedStack from './Authenticated'
import SigninStack from './Login'
//Our root navigatior that adds the drawer
export function RootNavigation(props) {
    const theme = useTheme();
    const navigationTheme = theme.dark ? PaperDarkTheme : PaperDefaultTheme;

    return (
        <NavigationContainer theme={navigationTheme}>
            {props.state.userToken == null ? (
                <SigninStack/>
            ) : (
                <AuthenticatedStack
                    Stack = {Stack}
                />
            )}
        </NavigationContainer>
    );
}




