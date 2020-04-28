import * as React from 'react';
import { 
    Button,Subheading,
    Divider, Text,DataTable,Title  ,
    Modal, Portal, Provider , Dialog,Paragraph ,Colors,TextInput,ActivityIndicator 
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import { View,ScrollView,RefreshControl  } from 'react-native';
import axios from 'axios'
import menuData from '../components/data/menu'
import ScreenNames from '../screenNames'
import TruckMenu from '../components/TruckMenu'
const {
       
    addItem,
   
} = ScreenNames.stackPages

export default class EditCompanyMenu extends React.Component {
    state = {
        isLoading:true,
        truckMenu:[]
    }

    async componentDidMount() {
        this.setState({
            isLoading:true,
            //guid:truckGuid
        })
        const {truckGuid} = this.context.userState.userData
        
        
        let payloadGetTruckMenu = new URLSearchParams();
        payloadGetTruckMenu.append("truckGuid", truckGuid)
        const resGetTruckMenu = await axios.post(
            `${this.context.ip}${this.context.endpoints.menuForTruck}`, 
            payloadGetTruckMenu
        )

        this.setState({
            truckMenu:resGetTruckMenu?.data?.data
        })
        console.log(this.state.truckMenu)

        this.setState({
            isLoading:false,
            guid:truckGuid
        })
    }

   
    editItem(index) {
        alert(`Edit item number ${index}`)
    }

    deleteItem = () => {
       
        this.state.menu.splice(this.state.deletingIndex, 1)
        this.setState({
            menu:this.state.menu
        })
        this._hideDeleteDialog()
    }

    _showEditDialog  = (index) => this.setState({ visibleEdit: true,editingIndex:index });
    _hideEditDialog  = () => this.setState({ visibleEdit: false });

    _showDeleteDialog  = (index) => this.setState({ visibleDelete: true,deletingIndex:index });
    _hideDeleteDialog  = () => this.setState({ visibleDelete: false });

    render() {
        
        return (
            <ScrollView
            >
                <React.Fragment>
                {
                    (!this.state.isLoading)?
                    <React.Fragment>
                        <ShowCurrentMenu menu={this.state.truckMenu} guid={this.state.guid} {...this.props}/>
                        <Button onPress={()=>this.componentDidMount()}>Refresh</Button>
                    </React.Fragment>
                        
                    :
                        <ActivityIndicator animating={true} color={Colors.green800} size={100} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
                }
                </React.Fragment>
                
            </ScrollView>
           
            
        )
    }
}

class ShowCurrentMenu extends React.Component{

    state = {
        menu:this.props.menu,
        visibleEdit:false,
        visibleDelete:false,
        deletingIndex:0,
        editingIndex:0,
        isLoading:true,
        guid:this.props.guid
    }

    _addItem() {
        //alert(this.props.guid)
        this.navigation.navigate(addItem.screenName)
        //console.log(Object.keys(this))
    }
    render() {
        return (
            <React.Fragment>
                <Title style={{textAlign: 'center',}}>Current Menu</Title>
                <TruckMenu 
                    menu = {this.state.menu} 
                    guid={this.state.guid} 
                    add={true} 
                    addfnc={this._addItem}
                    {...this.props}
                />
            
              

                <View>
                
                    <Portal>
                        <Dialog
                            visible={this.state.visibleEdit}
                            onDismiss={this._hideEditDialog}>
                        <Dialog.Title>Edit item:  {this.state.editingIndex}</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label='Item name'
                                value={this?.state?.menu[this?.state?.editingIndex]?.name}
                                onChangeText={
                                    text => {
                                        this.state.menu[this.state.editingIndex].name = text

                                        let tempMenu = this.state.menu
                                        tempMenu[this.state.editingIndex].name = text
                                        this.setState({ menu:tempMenu })
                                    }
                                }
                            />
                            <Text>{}</Text>
                        </Dialog.Content>
                        <Dialog.Actions >
                        
                            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                                <Button color = "#00aa00" onPress={this._hideEditDialog}>Close</Button>
                                {/* <Button color = "#ff0000" onPress={()=>{}}>Edit</Button> */}
                            </View>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>

                <Portal>
                    <Dialog
                        visible={this.state.visibleDelete}
                        onDismiss={this._hideDeletetDialog}>
                    <Dialog.Title>Are you sure you want to delete this item?</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                            This process can not be undone
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions >
                    
                        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Button color = "#00aa00" onPress={this._hideDeleteDialog}>Cancel</Button>
                            <Button color = "#ff0000" onPress={this.deleteItem}>Yes</Button>
                        </View>
                    </Dialog.Actions>
                    </Dialog>
                </Portal>
                
            </React.Fragment>   
        )
    }
}

ShowCurrentMenu.contextType = PreferencesContext;
EditCompanyMenu.contextType = PreferencesContext;