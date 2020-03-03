import * as React from 'react';

import {
  DarkTheme as PaperDarkTheme, // Papers dark theme.
  DefaultTheme as PaperDefaultTheme,// Papers light theme.
  Provider as PaperProvider,
} from 'react-native-paper';
// import { DefaultTheme, DarkTheme } from '@react-navigation/native';

//Used to get the phones perfered theme
import { useColorScheme } from 'react-native-appearance';

import {RootNavigation} from './navigation/RootNavigation'
import PreferencesContext from './context/context'

//This function provides the theme of the app
//And sets up a context that allows all
//Sub components to use it.
export default function Main(){
    const colorScheme = useColorScheme();

    //This is like react state,but changes 
    //a json object given an action, basicly 
    //good when changing objects rather then using
    // useState
    const [state, updateLoginToken] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
    );

    //Make state for theme
    const [theme, setTheme] = React.useState(
        colorScheme === 'dark' ? 'dark' : 'light'
    );

    const [user, setUser] = React.useState(
      {}
    );
    
    //Make func to set theme
    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }
    
    //Set context,these are like global states that can be
    //accessed in the children components
    const preferences = React.useMemo(
        () => ({
            user,
            toggleTheme,
            theme,
            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token
                console.log(data)
                setUser(data)
                updateLoginToken({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => updateLoginToken({ type: 'SIGN_OUT' }),
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token
        
                updateLoginToken({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
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
               <RootNavigation state={state}/>
            </PaperProvider>
        </PreferencesContext.Provider>
     
    );

}
