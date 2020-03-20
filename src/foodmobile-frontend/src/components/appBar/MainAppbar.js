import * as React from 'react';
import { Button, View, Text, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar,Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function MainAppbar(props) {
    const theme = useTheme();
    const { scene, previous, navigation, title } = props
    
    return (
        <Appbar.Header
        theme={{ colors: { primary: theme.colors.surface } }}
        >
            {/* {previous ? (
                <Appbar.BackAction
                    onPress={navigation.goBack}
                    color={theme.colors.primary}
                />
            ) : (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    // onPress={() => {
                    // ((navigation) ).openDrawer();
                    // }}
                >
                    <Avatar.Image
                    size={40}
                    source={{
                        uri:
                        'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    }}
                    />
                    <MaterialCommunityIcons name="menu" size = {30}  />
                </TouchableOpacity>
            )} */}
            <Appbar.Content
            title={
                title
            }
            titleStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                color: theme.colors.primary,
            }}
            />
        </Appbar.Header>    
    )
}

