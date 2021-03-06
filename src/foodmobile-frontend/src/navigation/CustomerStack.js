import React from 'react';
//Create the stack navigator
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-paper';
const Stack = createStackNavigator();
import { Button, View } from 'react-native';
// import { Text } from 'react-native';

//These are possible other pages we can go to from the inital landing page.
import FoodPreferences from '../pages/settings/foodPreferencesPage'
import myWallets from '../pages/settings/myWalletsPage'
import EditWallet from '../pages/settings/editWallet'
import ViewMapTruck from '../pages/viewTruck/viewMapTruck'
import FindTruckCompany from '../pages/FindTruckCompany'
import CreateCompany from '../pages/createCompany'
import EditCompanyMenu from '../pages/editCompanyMenu'
//Load the names of our pages
import ScreenNames from '../screenNames'
//Custom header
import AppbarWrapper from '../components/appBar/appBarWrapper'
//Load the main tab that shows at bottom
import MainTab from './tab/mainTab'
import CreateTruck from '../pages/createTruck'
import AddItem from '../pages/addItem'
export default function CustomerStack(props) {

    const {
        myWallet,
        myFoodPrefernces,
        editWallet,
        viewMapTruck,
        findFoodTruckCompany,
        createCompany,
        editCompanyMenu,
        addTruck,
        addItem
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
            <Stack.Screen 
                name={viewMapTruck.screenName}
                component={ViewMapTruck} 
                options ={{
                    title:viewMapTruck.title
                }}  
            />
            <Stack.Screen 
                name={findFoodTruckCompany.screenName}
                component={FindTruckCompany} 
                options ={{
                    title:findFoodTruckCompany.title
                }}  
            />

            <Stack.Screen 
                name={createCompany.screenName}
                component={CreateCompany} 
                options ={{
                    title:createCompany.title
                }}  
            />

            <Stack.Screen 
                name={editCompanyMenu.screenName}
                component={EditCompanyMenu} 
                options ={{
                    title:editCompanyMenu.title
                }}  
            />

            <Stack.Screen 
                name={addTruck.screenName}
                component={CreateTruck} 
                options ={{
                    title:addTruck.title
                }}  
            />

            <Stack.Screen 
                name={addItem.screenName}
                component={AddItem} 
                options ={{
                    title:addItem.title
                }}  
            />


        </Stack.Navigator>

    )
}