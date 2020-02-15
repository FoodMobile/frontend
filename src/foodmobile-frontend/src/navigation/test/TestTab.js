import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

function DetailsScreen(props) {
    const  page  = props?.route?.params?.page ?? ':(';
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <Text>Set from the {page} page</Text>
    </View>
  );
}

function NotSharedPage(props) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello! You can only get to this from homescreen</Text>
      <Text>Ya Yeet</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
     
      <Button   onPress={() => navigation.navigate('Details',{
            page:'Home'
        })}>
            Go to Details
        </Button>

        <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Special')} style={{marginTop:5}}>
        Go to Special
        </Button>

        <Button   onPress={() => navigation.toggleDrawer()}>
            Toggle drawer
        </Button>
       
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
        <Button   onPress={() => navigation.navigate('Details', {
           page:'Settings'
          })}>
            Go to Details
        </Button>
      
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={
        {
            headerTitleAlign:'center',
            headerBackAllowFontScaling:true,
            headerTintColor:'red',
            headerStyle:{backgroundColor:'orange'},
            headerTitleStyle : {width : 56}
        }
    }>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Special" component={NotSharedPage} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={
        {
            headerTitleAlign:'center',
            headerBackAllowFontScaling:true,
            headerTintColor:'red',
            headerStyle:{backgroundColor:'maroon'},
            headerTitleStyle : {width : 56}
        }
    }>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function TabApp3() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
      
      activeColor="#e91e63"
      inactiveColor="lightgrey"

      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#694fad' }}

      shifting={true}
      labeled={true}
      
      >
        <Tab.Screen name="Home" component={HomeStackScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                tabBarColor:'darkgreen'
            }}
            
        
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen} 
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
                tabBarColor:'#4f69ad'
            }}
        
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}