import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import {
    DarkTheme as PaperDarkTheme, // Papers dark theme.
    DefaultTheme as PaperDefaultTheme,// Papers light theme.
    Provider as PaperProvider,
} from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import MainTab from './tab/mainTab'

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? PaperDarkTheme : PaperDefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
            <MainTab/>
        </NavigationContainer>
    );
}