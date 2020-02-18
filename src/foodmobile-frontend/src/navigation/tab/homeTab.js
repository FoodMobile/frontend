import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

//pages
import MapPage from '../../pages/homeTab/MapPage'
import FavPage from '../../pages/homeTab/FavPage'
import MyOrdersPage from '../../pages/homeTab/MyOrdersPage'
const Tab = createMaterialBottomTabNavigator();

export default function HomeTab({ navigation }) {
    return (
      <Tab.Navigator
      initialRouteName="Map"
      activeColor="#f0edf6"
      inactiveColor="grey"
      barStyle={{ backgroundColor: '#694fad' }}
      screenOptions = {{
          tabBarColor: "#694fad"
      }}

      shifting = {true}
      >
          <Tab.Screen name="My Orders" component={MyOrdersPage} 
            options  = {{
              tabBarColor: "#93ad4f",
              tabBarIcon: ({ color, focused }) => (
                !focused && <MaterialCommunityIcons name="food" color={color}  /> ||
                focused && <MaterialCommunityIcons name="food" color={"gold"} size = {24} />
              ),
              headerTitle:'wow'
            }}
          />

          <Tab.Screen name="Map" component={MapPage} 
            options  = {{
              tabBarBadge: "2",
              tabBarIcon: ({ color, focused }) => (
                focused && <MaterialCommunityIcons name="google-maps" color="dodgerblue"  size = {24}/> ||
                !focused && <MaterialCommunityIcons name="google-maps" color={color}  size = {28}/> 
              ),
            }}
          />
          
          <Tab.Screen name="Favorites" component={FavPage} 
            options  = {{
              tabBarColor: "#4f64ad",
              tabBarIcon: ({ color,focused }) => (
             
                focused && <MaterialCommunityIcons name="heart" color={"red"}  size = {26}/> ||
                !focused && <MaterialCommunityIcons name="heart-outline" color={color} size = {20}  />
                
              ),
            }}    
          />
      </Tab.Navigator>
    );
  }


  
