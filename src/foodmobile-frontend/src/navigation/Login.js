import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenNames from '../screenNames'
import LoginPage from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import ForgotPassword from '../pages/ForgotPassword'
// import AppbarWrapper from '../components/appBar/appBarWrapper'
const Stack = createStackNavigator();

export default function SigninStack(props) {

    

    const {
        login,
        createAccount,
        resetPassword
    } = ScreenNames.stackPages
  
    return (
        <Stack.Navigator
            // screenOptions={AppbarWrapper()}   
        >
            <Stack.Screen 
                name={login.screenName}
                component={LoginPage} 
                options ={{
                    title:login.title
                }}  
            />

            <Stack.Screen 
                name={createAccount.screenName}
                component={CreateAccount} 
                options ={{
                    title:createAccount.title
                }}  
            />

            <Stack.Screen 
                name={resetPassword.screenName}
                component={ForgotPassword} 
                options ={{
                    title:resetPassword.title
                }}  
            />
        </Stack.Navigator>
    )
}