import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
const CombinedDarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme };


import {Tabs} from './tabs'
import { PreferencesContext } from './context';

export default function Main() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

  function toggleTheme() {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme(isDark => !isDark);
  }

  const preferences = React.useMemo(
    () => ({
      toggleTheme
    })
  );

  return (
   
    <PreferencesContext.Provider value={preferences}>
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tabs/>
        
      </NavigationContainer>
    </PaperProvider>
    </PreferencesContext.Provider>
  );
}