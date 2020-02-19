import * as React from 'react';
import { Button, View, Text, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import HomeTab from '../tab/homeTab'
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Stack = createStackNavigator();

export default function HomeStack() {
  const theme = useTheme();
  return (
    <Stack.Navigator initialRouteName="HomeBar" headerMode = "screen"
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
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    ((navigation) ).openDrawer();
                  }}
                >
                  {/* <Avatar.Image
                    size={40}
                    source={{
                      uri:
                        'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    }}
                  /> */}
                  <MaterialCommunityIcons name="menu" size = {30}  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === 'Feed' ? (
                    <MaterialCommunityIcons
                      style={{ marginRight: 10 }}
                      name="twitter"
                      size={40}
                      color={theme.colors.primary}
                    />
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    
    >
      <Stack.Screen name="HomeBar" component={HomeTab}  
        options ={{
          headerTitle:"Home"
        }}
      />
    </Stack.Navigator>
    
  );
}
