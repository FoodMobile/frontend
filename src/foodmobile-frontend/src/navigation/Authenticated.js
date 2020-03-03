import React from 'react';
// import { Text } from 'react-native';

import FoodPreferences from '../pages/settings/foodPreferencesPage'
import myWallets from '../pages/settings/myWalletsPage'
import EditWallet from '../pages/settings/editWallet'

import ScreenNames from '../screenNames'
import AppbarWrapper from '../components/appBar/appBarWrapper'
import MainTab from './tab/mainTab'

export default function AuthenticatedStack(props) {

    const {Stack} = props
    const {myWallet,myFoodPrefernces,editWallet} = ScreenNames.stackPages
  
    return (
        <Stack.Navigator
            screenOptions={AppbarWrapper()}   
        >
            <Stack.Screen
                name="Main Tab"
                component={MainTab}
                options={({ route }) => {
                    
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Feed';
                    console.log('!@# options',routeName);
                    return { headerTitle: routeName };
                }}
            />
        
            <Stack.Screen 
                name={myFoodPrefernces.screenName}
                component={FoodPreferences} 
                options ={{
                    title:myFoodPrefernces.title
                }}  
            />
            <Stack.Screen 
                name={myWallet.screenName}
                component={myWallets} 
                options ={{
                    title:myWallet.title
                }}  
            />
            <Stack.Screen 
                name={editWallet.screenName}
                component={EditWallet} 
                options ={{
                    title:editWallet.title
                }}  
            />
        </Stack.Navigator>
    )
}