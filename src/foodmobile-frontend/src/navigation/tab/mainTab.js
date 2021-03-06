import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

//constants with screen names
import ScreenNames from '../../screenNames'

//pages
import FavPage from '../../pages/FavPage'
import MyOrdersPage from '../../pages/MyOrdersPage'
import MapPage from '../../pages/MapPage'
import SettingsPage from '../../pages/SettingsPage'
// import GetCameraPage from '../../pages/testCameraPage'

const Tab = createMaterialBottomTabNavigator();


export default function MainTab(props) {
    const {mainTabs} = ScreenNames
    const {myOrders,map,myFavorites,mySettings} = mainTabs.pages
    return (
        <Tab.Navigator 
            initialRouteName={map.screenName}
            activeColor={mainTabs.activeColor}
            inactiveColor={mainTabs.inactiveColor}
            barStyle={{ backgroundColor: mainTabs.tabColor }}
            screenOptions = {{
                tabBarColor: mainTabs.tabColor 
            }}
    
            shifting = {true}
        >
            {/* My orders tab */}
            <Tab.Screen 
                name={myOrders.screenName}
                component={MyOrdersPage} 
                options  = {{
                    title:myOrders.title,
                    tabBarColor: myOrders.tabColor,
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons 
                            name={myOrders.icon.focused} 
                            color={focused? myOrders.color.focused:color} 
                            size = {focused? myOrders.size.focused: myOrders.size.unfocused}
                        />
                    ),
                }}
            />

            {/* Map tab */}
            <Tab.Screen 
                name={map.screenName}
                component={MapPage } //MapPage GetCameraPage
                options  = {{
                    title:map.title,
                    tabBarColor: map.tabColor,
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons 
                            name= {map.icon.focused}
                            color= {focused? map.color.focused:color} 
                            size = {focused? map.size.focused: map.size.unfocused}
                        />
                    ),
                }}
            />

            {/* My favorites tab */}
            <Tab.Screen          
                name={myFavorites.screenName}
                component={FavPage} 
                options  = {{
                    title:myFavorites.title,
                    tabBarColor: myFavorites.tabColor,
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons 
                            name= {focused? myFavorites.icon.focused: myFavorites.icon.unfocused}
                            color= {focused? myFavorites.color.focused:color} 
                            size = {focused? myFavorites.size.focused: myFavorites.size.unfocused}
                        />
                    ),
                }}     
            />

            {/* my settings tab */}
            <Tab.Screen 
                name={mySettings.screenName}
                component={SettingsPage} 
                options  = {{
                    title:mySettings.title,
                    tabBarColor: mySettings.tabColor,
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons 
                            name= {mySettings.icon.focused}
                            color= {focused? mySettings.color.focused:color} 
                            size = {focused? mySettings.size.focused: mySettings.size.unfocused}
                        />
                    ),
                }}     

            />
        </Tab.Navigator>
    )
}