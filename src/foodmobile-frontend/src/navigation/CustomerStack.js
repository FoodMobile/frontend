import React from 'react';
//Create the stack navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// import { Text } from 'react-native';

//These are possible other pages we can go to from the inital landing page.
import FoodPreferences from '../pages/settings/foodPreferencesPage'
import myWallets from '../pages/settings/myWalletsPage'
import EditWallet from '../pages/settings/editWallet'

//Load the names of our pages
import ScreenNames from '../screenNames'
//Custom header
import AppbarWrapper from '../components/appBar/appBarWrapper'
//Load the main tab that shows at bottom
import MainTab from './tab/mainTab'

export default function CustomerStack(props) {

    const {
        myWallet,
        myFoodPrefernces,
        editWallet
    } = ScreenNames.stackPages
    const {
        mainTabs
    } = ScreenNames
    return (
        <Stack.Navigator
            screenOptions={AppbarWrapper()}   
        >
            <Stack.Screen
                name={mainTabs.name}
                component={MainTab}
                //Creates route names
                options={({ route }) => {
                    
                    const routeName = route.state
                        ? route.state.routes[route.state.index]
                        : '';
                    //console.log('--- Loading',routeName, 'page');
                    return { headerTitle: routeName.name };
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