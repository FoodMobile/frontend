import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

//pages
import ProfilePage from '../../pages/profileTab/profile'

const Tab = createMaterialBottomTabNavigator();

export default function ProfileTab({ navigation }) {
    return (
      <Tab.Navigator
      initialRouteName="Profile 3"
      activeColor="#f0edf6"
      inactiveColor="grey"
      barStyle={{ backgroundColor: '#694fad' }}
      screenOptions = {{
          tabBarColor: "#694fad"
      }}
      shifting = {true}
      >
          <Tab.Screen name="Profile 1" component={ProfilePage} 
            options  = {{
              
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name="food" color={color}  />
              ),
            }}
          />

          <Tab.Screen name="Profile 2" component={ProfilePage} 
            options  = {{
              tabBarColor: "#4f64ad",
              tabBarBadge: "69",
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name="google-maps" color={color}  />
              ),
            }}
          />
          
          <Tab.Screen name="Profile 3" component={ProfilePage} 
            options  = {{
              tabBarColor: "#93ad4f",
              tabBarIcon: ({ color,focused }) => (
             
                focused && <MaterialCommunityIcons name="heart" color={color}  size = {26}/> ||
                !focused && <MaterialCommunityIcons name="heart-outline" color={color} size = {20}  />
                
              ),
            }}    
          />
      </Tab.Navigator>
    );
  }


  
