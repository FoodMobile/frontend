import React from 'react';
import { View,Text } from 'react-native';
/*
  From https://github.com/expo/react-native-appearance
  Basicly allowed to get preferred theme.
*/
import { AppearanceProvider } from 'react-native-appearance';

import Main from './src/Main'

//The app it self.
export default function App() {
  return (
    <AppearanceProvider>
        <Main/>
    </AppearanceProvider>
  );
}
