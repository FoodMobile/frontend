import React, {useState} from 'react';
import { View,ScrollView,SafeAreaView,FlatList,Image,StyleSheet  } from 'react-native';
import { useScreens } from 'react-native-screens';
import { List, Checkbox, DataTable ,Avatar, Button, Card, Title, Paragraph,TextInput,Text, IconButton,Colors } from 'react-native-paper';
import myFoodTrucks from '../../components/data/myFoodTrucks'
import { render } from 'react-dom';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default class ViewMapTruck extends React.Component {
    state = {
        favorited: false
    }

    render() {
        const {guid } = this.props.route.params;

        // const myTruck = (myFoodTrucks.filter(truck => truck.id == truckId))[0]

        // function handleFav(This) {
        //     This.setState({
        //         favorited: !This.state.favorited
        //     })
        // }
        //console.log(myTruck)
        return (
         
            <ScrollView>
                <Text>{guid}</Text>
                
                
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    stretch: {
        flex:1,
        width: 350, height: 350,
        resizeMode: 'contain'
    }
});