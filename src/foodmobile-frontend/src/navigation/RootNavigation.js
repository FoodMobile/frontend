import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import MainTab from './tab/mainTab'

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
            <MainTab/>
        </NavigationContainer>
    );
}