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
import axios from 'axios'
import {decode as atob, encode as btoa} from 'base-64'

function determineStack(userState) {
    //console.log('determine',userState)
    //if we still loading, show nothing
    if(userState.isLoading) {
        return (
        
            <View style={{ flex: 1 }}>
                {/* <Text>{JSON.stringify(userState)}</Text> */}
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
        const token = JSON.parse(await getData('token','{}'))
       
        // "simulates checking token"
        // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const data = await res.json()

        // console.log("'Checked' token",data)
        
        //if valid token
        try {
            if(token) {
                //console.log( this.context.userState.userData)
                //console.log(JSON.parse(atob(token.split('.')[1])))
                const atobResult = JSON.parse(atob(token.split('.')[1]))
                const username = atobResult.username
                //console.log('DECODED TOKEN = ',atobResult)
                try {
                    let payloadUserInfo = new URLSearchParams();
                    payloadUserInfo.append("username",username)
    
                    //console.log('SENDING USERNAME = ',username)
                    const resUserInfo = await axios.post(`${this.context.ip}${this.context.endpoints.userInfo}`, payloadUserInfo)

                    let payloadGetLoggedInTruck = new URLSearchParams();
                    payloadGetLoggedInTruck.append("token",token)
                    const resLoggedInTruck = await axios.post(`${this.context.ip}${this.context.endpoints.getLoggedInTruck}`, payloadGetLoggedInTruck)

                    console.log('==========================',resUserInfo.data)
                    console.log('--------------------------',resLoggedInTruck.data)
                    let userData = resUserInfo.data.data
                    userData.isDriver = resLoggedInTruck.data.success

                    await this.context.updateUserState({ 
                        type: 'UPDATE_USERDATA', 
                        userData: userData
                    });

                    //console.log('~~~~~~~~~~~~~~~~~~~~~~~~',userData)
    
                    await this.context.updateUserState({ 
                        type: 'RESTORE_TOKEN', token: token 
                    })
    
                } catch(error) {
                    console.log(error)
                    this.context.updateUserState({ 
                        type: 'RESTORE_TOKEN', token: {} 
                    })
                }
                
            } else {
                //if not valid token
                this.context.updateUserState({ 
                    type: 'RESTORE_TOKEN', token: {} 
                })
            }
        } catch (error) {
            //if not valid token
            this.context.updateUserState({ 
                type: 'RESTORE_TOKEN', token: {} 
            })
        }
        
        
      
    }

    render() {
        //this.userState = this.context.userState
        // console.log("RENDER USERSTATE = ",this.context.userState)
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




