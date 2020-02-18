import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import PreferencesContext from '../../context/context'
export default function MapPage({ navigation }) {
    const {toggleTheme } = React.useContext(
        PreferencesContext
    );
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map page!</Text>
        <Button 
        icon="camera" 
        mode="contained" onPress={() => {toggleTheme()}}>
            Batman
        </Button>
      </View>
    );
  }
  