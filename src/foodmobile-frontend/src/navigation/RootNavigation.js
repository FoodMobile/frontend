import React from 'react';
import { Appbar,Avatar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
// import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import {
    DarkTheme as PaperDarkTheme, // Papers dark theme.
    DefaultTheme as PaperDefaultTheme,// Papers light theme.
    //Provider as PaperProvider,
} from 'react-native-paper';
//import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import MainTab from './tab/mainTab'


import { createStackNavigator } from '@react-navigation/stack';
import AppbarWrapper from '../components/appBar/appBarWrapper'
const Stack = createStackNavigator();
import ScreenNames from '../screenNames'

import FoodPreferences from '../pages/settings/foodPreferencesPage'

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? PaperDarkTheme : PaperDefaultTheme;
    const {mySettings,myFoodPrefernces} = ScreenNames.stackPages
    return (
        <NavigationContainer theme={navigationTheme}>
            {/* <MainTab/> */}
            <Stack.Navigator
                screenOptions={AppbarWrapper()}   
            >
                <Stack.Screen
                    name="Main Tab"
                    component={MainTab}
                    options={({ route }) => {
                        
                        const routeName = route.state
                            ? route.state.routes[route.state.index].name
                            : 'Feed';
                        console.log('!@# options',routeName);
                        return { headerTitle: routeName };
                    }}
                />
          
                <Stack.Screen 
                    name={myFoodPrefernces.screenName}
                    component={FoodPreferences} 
                    options ={{
                        title:myFoodPrefernces.title
                    }}  
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}