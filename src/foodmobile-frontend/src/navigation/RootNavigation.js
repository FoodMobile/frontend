import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

//Pages
import StackPage from '../navigation/test/stack'
import DrawerContentTest from '../components/drawerContent'
//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
            <Drawer.Navigator  drawerContent={props => <DrawerContentTest {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={StackPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// drawerContent={props => <DrawerContent {...props} />}