import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

//Pages
import HomeStack from './stack/homeStack'

import DrawerContent from '../components/drawerContent'

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
            <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={HomeStack} />
                {/* <Drawer.Screen name="ProfileDrawer" component={ProfileTabStack} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// drawerContent={props => <DrawerContent {...props} />}