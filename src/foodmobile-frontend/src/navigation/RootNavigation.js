import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//pages
import FavPage from '../pages/FavPage'
import MyOrdersPage from '../pages/MyOrdersPage'
import MapPage from '../pages/MapPage'
import SettingsPage from '../pages/SettingsPage'

const Tab = createMaterialBottomTabNavigator();

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
             <Tab.Navigator labeled = {true} shifting = {false}>
                <Tab.Screen name="MyOrders" component={MyOrdersPage} />
                <Tab.Screen name="Map" component={MapPage} />
                <Tab.Screen name="Fav" component={FavPage} />
                <Tab.Screen name="Settings" component={SettingsPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}