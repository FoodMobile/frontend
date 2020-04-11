import * as React from 'react';
import { Dimensions, View, ScrollView, StyleSheet, } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider, List, DefaultTheme, Provider as PaperProvider, } from 'react-native-paper'

import AppbarWrapper from '../components/appBar/appBarWrapper'
import ScreenNames from '../screenNames'


const Stack = createStackNavigator();

// function showFavs(props){
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Favoritez page!</Text>
//     </View>
//   )
// }

let FAVORITES = [
  {
    truckName: "truck name goes here",
  },
  {
    truckName: "meal name here",
  }
]


export default function FavPage({ navigation }) {
    const {myFavorites} =  ScreenNames.stackPages
    return (
      <PaperProvider theme={DefaultTheme}>
        <ScrollView style={styles.container}>
          {FAVORITES.map((favorite, index) => (
            <>
            <List.Item
              title={favorite.truckName}
              // style={{
                
              // }}
            />
            <Divider/>
            </>
          ))}
        </ScrollView>
      </PaperProvider>
        // <Stack.Navigator 
        //     // screenOptions={AppbarWrapper()}
        //     initialRouteName= {myFavorites.screenName}
        // >
        //   <Stack.Screen 
        //       name={myFavorites.screenName}
        //       component={showFavs} 
        //       options ={{
        //           title:myFavorites.title
        //       }}
             
        //   />
        // </Stack.Navigator>
        
    );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#f2f2ff',
  },
});
  