import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

//pages
import FavPage from '../../pages/FavPage'
import MyOrdersPage from '../../pages/MyOrdersPage'
import MapPage from '../../pages/MapPage'
import SettingsPage from '../../pages/SettingsPage'

const Tab = createMaterialBottomTabNavigator();


export default function MainTab(props) {
    return (
        <Tab.Navigator 
            initialRouteName="Map"
            activeColor="white"
            inactiveColor="grey"
            barStyle={{ backgroundColor: '#694fad' }}
            screenOptions = {{
                tabBarColor: "#694fad"
            }}
    
            shifting = {true}
        >
            <Tab.Screen 
                name="MyOrders" 
                component={MyOrdersPage} 
                options  = {{
                    tabBarColor: "#93ad4f",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="food" color={focused? 'gold':color} size = {focused? 26: 20}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Map" 
                component={MapPage} 
                options  = {{
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="google-maps" color={focused? 'dodgerblue':color} size = {focused? 26: 20}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Fav" 
                component={FavPage} 
                options  = {{
                    tabBarColor: "#4f64ad",
                    tabBarIcon: ({ color,focused }) => (
                        <MaterialCommunityIcons 
                            name={focused? "heart":"heart-outline"} 
                            color={focused? "red": color}  
                            size = {focused? 26: 20}/>
                    ),
                }}    
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsPage} 
                options  = {{
                    tabBarColor: "#4f64ad",
                    tabBarIcon: ({ color,focused }) => (
                        <MaterialCommunityIcons 
                            name="wrench"
                            color={color} 
                            size ={focused? 26: 20}/>
                    ),
                }}    

            />
        </Tab.Navigator>
    )
}