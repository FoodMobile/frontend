import * as React from 'react';
import { Dimensions, View, ScrollView, StyleSheet, } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, IconButton, Divider, List, DefaultTheme, Provider as PaperProvider, } from 'react-native-paper'

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
    key: "Falafel Frenzy",
  },
  {
    key: "Mowie Wowie",
  },
  {
    key: "Surf's Up",
  },
  {
    key: "New Horizons Smoothie",
  },
  {
    key: "Classic Boston Roll",
  },
]


export default function FavPage({ navigation }) {
    const {myFavorites} =  ScreenNames.stackPages
    return (
      // <PaperProvider theme={DefaultTheme}>
        <ScrollView style={styles.container}>
          {FAVORITES.map((favorite, index) => (
            <>
            <View>
              <List.Item
                title={favorite.key}
                style={{
                  
                }}
                key = {favorite.key}
                right={props => <IconButton
                  icon={ index%0 ==0? "heart-outline": "heart"}
                  color={Colors.yellow600}
                  size={25}
                  onPress={() => console.log('Pressed')}
                />}
              />
              
              <Divider/>
            </View>
            </>
          ))}
        </ScrollView>
      // </PaperProvider>
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
    //backgroundColor: '#ecf0f1',
  },
});
  