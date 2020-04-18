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
import CustomerStack from './CustomerStack'
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
        return <CustomerStack/>  
    } else {
        return <SigninStack/>
    }
    
}

//Our root navigatior that adds the drawer
export class  RootNavigation extends React.Component {
    
    async componentDidMount() {    
        const token = JSON.parse(await getData('token',''))
       
        // "simulates checking token"
        // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const data = await res.json()

        // console.log("'Checked' token",data)
        
        //if valid token
        if(token) {
            this.context.updateUserState({ 
                type: 'RESTORE_TOKEN', token: token 
            })
        } else {
            //if not valid token
            this.context.updateUserState({ 
                type: 'RESTORE_TOKEN', token: {} 
            })
        }
        
      
    }

    render() {
        //this.userState = this.context.userState
        console.log(this.context.userState)
        return (
            <NavigationContainer theme={this.props.theme}>
                {/* If no user token,that means user needs to log in */}
                
                {
                    determineStack(this.context.userState)
                }
            </NavigationContainer>
        );
    }

}

RootNavigation.contextType = PreferencesContext;




