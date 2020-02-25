import React from 'react';
import { View,Text,ScrollView,SafeAreaView,FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/*
  From https://github.com/expo/react-native-appearance
  Basicly allowed to get preferred theme.
*/
import { AppearanceProvider } from 'react-native-appearance';

import Main from './src/Main'

//The app it self.
export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <Main/>
      </AppearanceProvider>
    </SafeAreaProvider>

  );
}

