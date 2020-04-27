import React, {useState} from 'react';
import { View,ScrollView,SafeAreaView,FlatList,Image,StyleSheet  } from 'react-native';
import { useScreens } from 'react-native-screens';
import { ActivityIndicator, List, Checkbox, DataTable ,Avatar, Button, Card, Title, Paragraph,TextInput,Text, IconButton,Colors } from 'react-native-paper';
import myFoodTrucks from '../../components/data/myFoodTrucks'
import { render } from 'react-dom';
import PreferencesContext from '../../context/context'
import axios from 'axios'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default class ViewMapTruck extends React.Component {
    state = {
        favorited: false,
        isLoading:true,
        truckMenu:undefined
    }

    async componentDidMount() {
        //console.log(this.props.route.params,'---')
        const {
            guid:truckGuid
        } = this.props.route.params

        let payloadGetTruckMenu = new URLSearchParams();
        payloadGetTruckMenu.append("truckGuid", truckGuid)
        const resGetTruckMenu = await axios.post(
            `${this.context.ip}${this.context.endpoints.menuForTruck}`, 
            payloadGetTruckMenu
        )

        this.setState({
            truckMenu:resGetTruckMenu?.data?.data
        })
        console.log('MENU',resGetTruckMenu?.data)

        this.setState({
            isLoading:false
        })
    }

    render() {
        const {guid } = this.props.route.params;

       

        return (
            <React.Fragment>
            {
                (!this.state.isLoading)?
                    <React.Fragment>
                        <ScrollView>
                            <TruckMenu menu = {this.state.truckMenu} guid={guid}/>
                        </ScrollView>
                    </React.Fragment> 
                :
                    <ActivityIndicator animating={true} color={Colors.green800} size={100} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
            }
            </React.Fragment>
             
           
        );
        
    }
}

class TruckMenu extends React.Component{


    render() {
        const {
            menu,
            guid
        } = this.props

        return(
            <React.Fragment>
                {
                    menu.length==0?
                    <Text>Truck {guid} has no menu</Text>
                    :
                    <Text>Menu</Text>
                }
            </React.Fragment>
            
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
ViewMapTruck.contextType = PreferencesContext;