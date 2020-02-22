import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

//
import { List, Checkbox,Button  } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import {
Text
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
function MyOrder() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My Orders</Text>
      </View>
    );
}
  
function MyMaps() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map</Text>
      </View>
    );
}

function Fav() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorite</Text>
      </View>
    );
}

function setHome({navigation}) {
    return (
        <List.Section title="General Settings">
            <List.Accordion
            title="Settings1"
            left={props => <List.Icon {...props} icon="folder" />}
            >
            <List.Item title="Set1" onPress={() =>navigation.navigate('Set1')}/>

            <List.Item title="Second item" onPress={() =>navigation.navigate('MyOrders')}/>
            </List.Accordion>

          
        </List.Section>
    );
}

function set1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>set1</Text>
      </View>
    );
}


class Settings extends React.Component {
    state = {
        expanded: true
    }
    
    _handlePress = () =>
        this.setState({
        expanded: !this.state.expanded
    });
    
    render() {
        return (
            <>
            
            <Stack.Navigator>
                <Stack.Screen name="SetHome" component={setHome} >
                </Stack.Screen>
                
                <Stack.Screen name="Set1" component={set1} />    
            </Stack.Navigator>

           
           
            </>
        );
    }
    
    
}
  
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


//

//Pages
import MainStack from './stack/mainStack'

import DrawerContent from '../components/drawerContent'

//Our root navigatior that adds the drawer
export function RootNavigation() {
    const theme = useTheme();
    const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
    return (
        <NavigationContainer theme={navigationTheme}>
             <Tab.Navigator labeled = {true} shifting = {false}>
                <Tab.Screen name="MyOrders" component={MyOrder} />
                <Tab.Screen name="Map" component={MyMaps} />
                <Tab.Screen name="Fav" component={Fav} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}