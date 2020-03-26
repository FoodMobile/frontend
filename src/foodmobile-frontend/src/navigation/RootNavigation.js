import React,{useState} from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PreferencesContext from '../context/context'
import {getData,storeData} from '../components/asyncStorage'
// import { Text,AsyncStorage, View } from 'react-native';
// import PreferencesContext from '../context/context'

import {
    DarkTheme as PaperDarkTheme, // Papers dark theme.
    DefaultTheme as PaperDefaultTheme,// Papers light theme.
    //Provider as PaperProvider,
} from 'react-native-paper';

//import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme,Button, Text } from 'react-native-paper';

//This is what we show if user is logged in
import AuthenticatedStack from './Authenticated'
//This is what we show if user is not logged in
import SigninStack from './Login'
import Loading from '../../assets/loading.png'
import Splash from '../../assets/splash.png'
function determineStack(userState) {
    //console.log('determine',userState)
    //if we still loading, show nothing
    if(userState.isLoading) {
        return (
        
            <View style={{ flex: 1 }}>
                <Image
                    source={Loading}
                    resizeMode='contain'
                    style={{
                        maxHeight: '100%',
                        maxWidth: '100%'
                    }}
                />
            </View>
        )
    }
    
    //If the token is undefined, that means they need to log in
    if(JSON.stringify(userState?.token) === '{}' || userState?.token === undefined) {
        return  <SigninStack/>
    }

    //If there is a token
    if(userState?.token) {
        
        if(userState?.token?.value) {
            return <AuthenticatedStack/>
        } else {
            return <SigninStack/>
        }
        
    }
    
}

//Our root navigatior that adds the drawer
export class  RootNavigation extends React.Component {
    
    async componentDidMount() {    
        const token = JSON.parse(await getData('token',undefined))

        // //console.log('got token = ',token,Object.keys(token),token.userName)
        this.context.updateUserState({ 
            type: 'RESTORE_TOKEN', token: token 
        })
        // this.context.userState.token = {
        //     ...this.context.userState.token,
        //     value:token
        // }
        // this.context.userState.isLoading=false
        //this.forceUpdate();
    }

    render() {
        this.userState = this.context.userState
        return (
            <NavigationContainer theme={this.props.theme}>
                {/* If no user token,that means user needs to log in */}
                
                {
                    determineStack(this.userState)
                }
            </NavigationContainer>
        );
    }

}

RootNavigation.contextType = PreferencesContext;




