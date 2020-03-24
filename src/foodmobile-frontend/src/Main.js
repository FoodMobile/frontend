import * as React from 'react';

import {getData,storeData} from './components/asyncStorage'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
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
import { set } from 'react-native-reanimated';

//This function provides the theme of the app
//And sets up a context that allows all
//Sub components to use it.
export default function Main(){
    const colorScheme = useColorScheme();

    //This is like react state,but changes 
    //a json object given an action, basicly 
    //good when changing objects rather then using
    // useState
    const [userState, updateLoginToken] = React.useReducer(
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
                    user: action.user
                };
            case 'SIGN_OUT':
                return {
                    ...prevState,
                    isSignout: true,
                    userToken: null,
                    user: {}
                };
            case 'UPDATE_USER':
                return {
                    ...prevState,
                    user: action.user
                };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
          user:{}
        }
    );
    
    //Make state for theme
    const [theme, setTheme] = React.useState(
        colorScheme === 'dark' ? 'dark' : 'light'
    );
    
    
    //Make func to set theme
    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }
    
    storeData(JSON.stringify(Date.now()),'testData')
    //Set context,these are like global states that can be
    //accessed in the children components
    const preferences = React.useMemo(
        () => ({
            userState,
            toggleTheme,
            theme,
            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token

                const token = `${data.userName}-${data.password}-${Date.now()}`

                //Store the token
                storeData(JSON.stringify(data),'token')

                //Update state
                updateLoginToken({ 
                    type: 'SIGN_IN', 
                    token: token, 
                    user: {
                        ...data
                    }
                });
            },
            signOut: async () => {
                //remove saved token
                await storeData(JSON.stringify({}),'token')
                //Update state
                updateLoginToken({ type: 'SIGN_OUT',user:{} })
            },
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token
                
                updateLoginToken({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            style: theme => {
                const primary = theme==='light'? '#b4eeb4' : '#BB00BB'
                const secondary = theme==='light'? '#908cff' : '#f9901c' 
                const tertiary = theme==='light'? '#11114e' : '#b438fb'

                return {
                    testingStyle: {
                        flex: 1,
                        flexWrap: 'wrap',
                        width: Dimensions.get('window').width,
                        backgroundColor: secondary, //greyish color
                    },
                }
            }
        })
    );

    // React.useEffect(()=>{
    //     async function getToken() {
            
    //         const token = await getData('token',undefined)
    //         console.log('got token = ',token)
    //         updateLoginToken({ 
    //             type: 'RESTORE_TOKEN', token: 'already-signed-in-token' 
    //         })

    //         setUser({
    //             ...user,
    //             token: 'already-signed-in-token' 
    //         })
    //         setPageLoaded(true)
           
    //     }
    //     if(!pageLoaded) {
    //         getToken()
    //     }
        
    // })

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
               <RootNavigation userState={userState}/>
            </PaperProvider>
        </PreferencesContext.Provider>
     
    );

}
