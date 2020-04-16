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
// import { set } from 'react-native-reanimated';

//This function provides the theme of the app
//And sets up a context that allows all
//Sub components to use it.
export default function Main(){
    const colorScheme = useColorScheme();

    //This is like react state,but changes 
    //a json object given an action, basicly 
    //good when changing objects rather then using
    // useState
    const [userState, updateUserState] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
                return {
                    ...prevState,
                    isSignout: false,
                    isLoading:false,
                    token: action.token
                };
            case 'SIGN_IN':
                return {
                    ...prevState,
                    isSignout: false,
                    token: action.token
                };
            case 'SIGN_OUT':
                return {
                    ...prevState,
                    isSignout: true,
                    token: {}
                };
            case 'IS_LOADING':
                return {
                    ...prevState,
                    isLoading:action.isLoading
                };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          token:{
              value:undefined,
              expDate:undefined,
              assingDate:undefined
          }
        }
    );
    
    const {ip,endpoints} = React.useContext(
        PreferencesContext
    )
    //const [pageLoaded,setPageLoaded] = React.useState(false)

    //Make state for theme
    const [theme, setTheme] = React.useState(
        colorScheme === 'dark' ? 'dark' : 'light'
    );
        
    //Make func to set theme
    async function toggleTheme(newTheme = theme === 'light' ? 'dark' : 'light') {
        setTheme(newTheme);
        const x = await storeData(newTheme,'theme')
    }

    //Set context,these are like global states that can be
    //accessed in the children components
    const preferences = React.useMemo(
        () => ({
            userState,
            updateUserState,
            toggleTheme,
            ip,
            endpoints,
            theme,
            signIn: async data => {
                // In a production app, we need to send some data (usually
                // username, password) to server and get a token We will also
                // need to handle errors if sign in failed After getting token,
                // we need to persist the token using `AsyncStorage` In the
                // example, we'll use a dummy token

                // "simulates logging in"
                try {
                    console.log(`${ip}${endpoints.login}`)
                    
                    let payload = new FormData();
                    payload.append("username",data.userName)
                    payload.append("password",data.password)

                    const res = await fetch(`${ip}${endpoints.login}`, {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: payload
                    });

                    //const res = await fetch(`${ip}${endpoints.login}`)///todos/1
                    const resData = await res.json()
                    console.log(resData)

                    if(resData.title) {
                        const token = {
                            value:`${data.userName}-${data.password}-token`,
                            expDate:Date.now(),
                            assingDate:Date.now()
                        }
                        
                        //Store the token
                        await storeData(JSON.stringify(token),'token')
        
                        //Update state
                        await updateUserState({ 
                            type: 'SIGN_IN', 
                            token: token
                        });
    
                        return {
                            status:200,
                            message:'Logged in'
                        }
                    } else {
                        throw `invalid login - ${resData.title}`
                    }
                }
                catch(err) {
                    //failed login
                    return {
                        status:400,
                        message:err
                    }
                }
                
               
            },
            signOut: async () => {
                //remove saved token
                await storeData(JSON.stringify({}),'token')
                //Update state
                updateUserState({ type: 'SIGN_OUT'})
            },
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token
                
                updateUserState({ type: 'SIGN_IN', token: 'dummy-auth-token' });
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
        
    React.useEffect(()=>{
        async function getTheme() {
            let theme = await getData('theme','light')
            //console.log(theme)
            setTheme(theme)  
        }
        getTheme()
    }, []) // maybe put user Id in here?

    const determineTheme = theme => {
        if(theme === 'light') {
            return {
                ...PaperDefaultTheme,
                colors: { ...PaperDefaultTheme.colors, primary: '#1ba1f2' },
            }
        } else {
            return {
                ...PaperDarkTheme,
                colors: { ...PaperDarkTheme.colors, primary: '#1ba1f2' },
            }
        }
    }
    
    return (
        //Pass context
        <PreferencesContext.Provider value = {preferences}>
            <PaperProvider
                //Base off theme
                theme={
                    determineTheme(theme)
                }
            >
               <RootNavigation theme={ determineTheme(theme)}/>
            </PaperProvider>
        </PreferencesContext.Provider>
     
    );

}
