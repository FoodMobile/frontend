import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    useTheme,
    Avatar,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
  } from 'react-native-paper';

  import { Button } from 'react-native-paper';
  import {PreferencesContext} from './context';

const ThemeContext = React.createContext(PreferencesContext);
function HomeScreen(props) {
    const paperTheme = useTheme();
    const {toggleTheme } = React.useContext(
        PreferencesContext
      );
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button 
        icon="camera" 
        mode="contained" onPress={() => {console.log(toggleTheme())}}>
            Press me
        </Button>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export class Tabs extends React.Component{
    render() {
        return (
   
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
      
        );
    }
  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  