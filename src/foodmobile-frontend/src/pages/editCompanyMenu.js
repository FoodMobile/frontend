import * as React from 'react';
import { 
    Button,Subheading,
    Divider, Text,DataTable,Title  ,
    Modal, Portal, Provider , Dialog,Paragraph ,Colors,TextInput 
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import { View,ScrollView } from 'react-native';

import menuData from '../components/data/menu'

export default class EditCompanyMenu extends React.Component {
    componentDidMount() {
        //console.log('Mount')
        // this.setState({
        //     menu:menuData
        // })
    }

    state = {
        menu:menuData,
        visibleEdit:false,
        visibleDelete:false,
        deletingIndex:0,
        editingIndex:0
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
            <React.Fragment>
                <Title style={{textAlign: 'center',}}>Currernt Menu</Title>
                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>Item</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Price</DataTable.Title>
                    <DataTable.Title numeric></DataTable.Title>
                    <DataTable.Title numeric></DataTable.Title>
                    </DataTable.Header> 

                    {
                        this.state.menu.map((item,index)=> {
                            return (
                                <DataTable.Row key = {item.name+index}>
                                    <DataTable.Cell >{item.name}</DataTable.Cell>
                                    <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                                    <DataTable.Cell numeric>{item.price}</DataTable.Cell>
                                    <DataTable.Cell 
                                        numeric 
                                        onPress={()=>this._showEditDialog(index)}
                                    >
                                        <Text style={{color:Colors.amber600}}> Edit</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell 
                                        numeric 
                                        onPress={()=> this._showDeleteDialog(index)} 
                                    >
                                         <Text style={{color:'#ff0000'}}> Delete</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )
                        })
                    }

                    
                </DataTable>     
               
                <Divider  style = {{padding:1}}/>

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