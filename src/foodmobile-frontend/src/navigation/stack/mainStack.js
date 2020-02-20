import * as React from 'react';
import { Button, View, Text, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, useTheme } from 'react-native-paper';
import HomeTab from '../tab/homeTab'
import ProfileTab from '../tab/profileTab'
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import MainAppbar from '../../components/MainAppbar'
const Stack = createStackNavigator();


export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="HomeStack" headerMode = "screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            //Custom header to show the name of page
            <MainAppbar title={title} scene = {scene} previous = {previous} navigation={navigation}/>
          );
        },
      }}
    
    >
      <Stack.Screen name="HomeStack" component={HomeTab}  
        options ={{
          headerTitle:"Home"
        }}
      />
      <Stack.Screen name="ProfileStack" component={ProfileTab}  
        options ={{
          headerTitle:"My Profile"
        }}
      />
    </Stack.Navigator>
    
  );
}
