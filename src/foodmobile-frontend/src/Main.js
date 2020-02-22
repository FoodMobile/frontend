import * as React from 'react';

import {
  DarkTheme as PaperDarkTheme, // Papers dark theme.
  DefaultTheme as PaperDefaultTheme,// Papers light theme.
  Provider as PaperProvider,
} from 'react-native-paper';

//Used to get the phones perfered theme
import { useColorScheme } from 'react-native-appearance';

import {RootNavigation} from './navigation/RootNavigation'
import PreferencesContext from './context/context'

//This function provides the theme of the app
//And sets up a context that allows all
//Sub components to use it.
export default function Main(){
    const colorScheme = useColorScheme();

    //Make state for theme
    const [theme, setTheme] = React.useState(
        colorScheme === 'dark' ? 'dark' : 'light'
    );
    
    //Make func to set theme
    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }
    
    //Set context
    const preferences = React.useMemo(
        () => ({
        toggleTheme,theme
        })
    );
    
    return (
        //Pass context
        <PreferencesContext.Provider value = {preferences}>
            <PaperProvider
                //Base off theme
                theme={
                theme === 'light'
                    ? {
                        ...PaperDefaultTheme,
                        colors: { ...PaperDefaultTheme.colors, primary: '#1ba1f2' },
                    }
                    : {
                        ...PaperDarkTheme,
                        colors: { ...PaperDarkTheme.colors, primary: '#1ba1f2' },
                    }
                }
            >
               <RootNavigation/>
            </PaperProvider>
        </PreferencesContext.Provider>
     
    );

}
