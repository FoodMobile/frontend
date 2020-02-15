import React from 'react';
import { View,Text } from 'react-native';
/*
  From https://github.com/expo/react-native-appearance
  Basicly allowed to get preferred theme.
*/
import { AppearanceProvider } from 'react-native-appearance';

import Main from './src/Main'

export default function App() {
  return (
    <AppearanceProvider>
       {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Homew!</Text>
        </View> */}
        <Main/>
    </AppearanceProvider>
  );
}
