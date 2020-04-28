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
import axios from 'axios'
import {decode as atob, encode as btoa} from 'base-64'
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
            case 'SET_LOADING':
                return {
                    ...prevState,
                    isLoading: action.isLoading,
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
            case 'UPDATE_USERDATA':
                return {
                    ...prevState,
                    userData:action.userData
                };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          token:'',
          userData:{}
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

                let payload = new URLSearchParams();
                payload.append("username",data.userName)
                payload.append("password",data.password)
                const userName = data.userName

                await storeData(data.userName,'username')
                await storeData(data.password,'password')

                axios.post(`${ip}${endpoints.login}`, payload)
                .then(async function (result) {

                    if(result.data.success) {
                         //console.log('TOKEN GOT')
                        //Store the token
                        await storeData(JSON.stringify(result.data.token),'token')

                        
                        let payloadUserInfo = new URLSearchParams();
                        payloadUserInfo.append("username",userName)
        
                        //console.log('SENDING USERNAME = ',username)
                        const responseUserInfo = await axios.post(`${ip}${endpoints.userInfo}`, payloadUserInfo)
                        let userData = responseUserInfo?.data?.data
                    

                        let payloadGetLoggedInTruck = new URLSearchParams();
                        payloadGetLoggedInTruck.append("token",result.data.token)
                        const resGetLoggedInTruck = await axios.post(`${ip}${endpoints.getLoggedInTruck}`, payloadGetLoggedInTruck)

                        // console.log('==========',payloadGetLoggedInTruck)
                        // console.log('RES FOR GET LOGGED IN TRUCK = ',resGetLoggedInTruck.data);

                        userData.isDriver = resGetLoggedInTruck?.data?.success;
                
                        if(userData .isDriver) {
                            let payLoadGetTruckGuid = new URLSearchParams();
                            payLoadGetTruckGuid.append("username",userName)
                            const resGetTruckGuid = await axios.post(`${ip}${endpoints.getTruckGuid}`, payLoadGetTruckGuid)
                            
                            //console.log("------------------------",resGetTruckGuid.data)
                            userData.truckGuid = resGetTruckGuid.data.data.guid
                        
                        }
                        //console.log('USER DATA ===',userData)

                        await updateUserState({ 
                            type: 'UPDATE_USERDATA', 
                            userData: userData
                        });

                        //Update state
                        await updateUserState({ 
                            type: 'SIGN_IN', 
                            token: result.data.token
                        });
                    } else {
                        alert(result.data.errorMessage)
                        await updateUserState({ 
                            type: 'SET_LOADING', 
                            isLoading: false
                        });
                    }
                   

                        
                })
                .catch(async function (error) {
                    console.log(error);
                    alert(error)
                    await updateUserState({ 
                        type: 'SET_LOADING', 
                        isLoading: false
                    });
                });
    
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
