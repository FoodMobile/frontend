import React, {useState} from 'react';
import { View,ScrollView,SafeAreaView,FlatList,Image,StyleSheet  } from 'react-native';
import { useScreens } from 'react-native-screens';
import { ActivityIndicator, List, Checkbox, DataTable ,Avatar, Button, Card, Title, Paragraph,TextInput,Text, IconButton,Colors } from 'react-native-paper';
import myFoodTrucks from '../../components/data/myFoodTrucks'
import { render } from 'react-dom';
import PreferencesContext from '../../context/context'
import axios from 'axios'
import TruckMenu from '../../components/TruckMenu'
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
        console.log('MENU',resGetTruckMenu?.data.data[0])
        console.log('STATE',this.context.userState.userData)

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

// class TruckMenu extends React.Component{


//     render() {
//         const {
//             menu,
//             guid
//         } = this.props

//         return(
//             <React.Fragment>
//                 {
//                     menu.length==0?
//                     <Text>Truck {guid} has no menu</Text>
//                     :
//                     <React.Fragment>
//                         <List.Section title="Menu">
//                             <DataTable>
//                                 <DataTable.Header>
//                                 <DataTable.Title>Item</DataTable.Title>
//                                 <DataTable.Title numeric>Has nuts?</DataTable.Title>
//                                 <DataTable.Title numeric>Is Glueten Free?</DataTable.Title>
//                                 <DataTable.Title numeric>Is Vegan?</DataTable.Title>
//                                 <DataTable.Title numeric>Price</DataTable.Title>
//                                 </DataTable.Header>

//                                 {menu.map((menuItem, index) => ( 
//                                     <DataTable.Row key = {menuItem.title+" "+index}>
//                                         <DataTable.Cell onPress={()=>alert(menuItem.description)}>{menuItem.title}</DataTable.Cell>
//                                         <DataTable.Cell numeric>{menuItem.containsNuts? "yes":"no"}</DataTable.Cell>
//                                         <DataTable.Cell numeric>{menuItem.gluetenFree? "yes":"no"}</DataTable.Cell>
//                                         <DataTable.Cell numeric>{menuItem.vegan? "yes":"no"}</DataTable.Cell>
//                                         <DataTable.Cell numeric >
//                                             <Text style={{color:Colors.green800}}>${menuItem.primaryPrice}</Text>
//                                         </DataTable.Cell>
//                                     </DataTable.Row>  
//                                 ))}

                            
//                             </DataTable>
//                         </List.Section>
//                     </React.Fragment>
//                 }
//             </React.Fragment>
            
//         )
//     }
// }

const styles = StyleSheet.create({
    stretch: {
        flex:1,
        width: 350, height: 350,
        resizeMode: 'contain'
    }
});
ViewMapTruck.contextType = PreferencesContext;