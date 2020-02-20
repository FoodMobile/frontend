import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

//Pages
import MainStack from './stack/mainStack'

import DrawerContent from '../components/drawerContent'

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
            <Drawer.Navigator  
                drawerContent={props => <DrawerContent {...props} />}  
                edgeWidth = {3000} 
                minSwipeDistance = {0}
            >
                <Drawer.Screen name="MainDrawer" component={MainStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}