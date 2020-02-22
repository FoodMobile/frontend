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
            {!previous &&  <Appbar.BackAction
                onPress={navigation.goBack}
                color={theme.colors.primary}
            />
            }
            <Appbar.Content
            title={
                title
                // title === 'Feed' ? (
                //   <MaterialCommunityIcons
                //     style={{ marginRight: 10 }}
                //     name="twitter"
                //     size={40}
                //     color={theme.colors.primary}
                //   />
                // ) : (
                //   title
                // )
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