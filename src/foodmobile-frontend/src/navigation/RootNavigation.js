import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

//Pages
import ThemeChangePage from '../pages/themeChange'
import Test from '../pages/test'

export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    console.log(theme.dark)
    return (
        <NavigationContainer theme={navigationTheme}>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ThemeChangePage} />
                <Drawer.Screen name="Test" component={Test} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// drawerContent={props => <DrawerContent {...props} />}