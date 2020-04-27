import React, {useState} from 'react';
import { ActivityIndicator, List, Checkbox, DataTable ,Avatar, Button, Card, Title, Paragraph,TextInput,Text, IconButton,Colors } from 'react-native-paper';


export default class TruckMenu extends React.Component{


    render() {
        const {
            menu,
            guid
        } = this.props

        return(
            <React.Fragment>
                {
                    menu.length==0?
                    <React.Fragment>
                        <Text>Truck {guid} has no menu</Text>
                        <Button onPress={()=>this.props.addfnc()}>Add items</Button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <List.Section title={`Menu for ${guid}`}>
                            <DataTable>
                                <DataTable.Header>
                                <DataTable.Title>Item</DataTable.Title>
                                <DataTable.Title numeric>Has nuts?</DataTable.Title>
                                <DataTable.Title numeric>Is Glueten Free?</DataTable.Title>
                                <DataTable.Title numeric>Is Vegan?</DataTable.Title>
                                <DataTable.Title numeric>Price</DataTable.Title>
                                </DataTable.Header>

                                {menu.map((menuItem, index) => ( 
                                    <DataTable.Row key = {menuItem.title+" "+index}>
                                        <DataTable.Cell onPress={()=>alert(menuItem.description)}>{menuItem.title}</DataTable.Cell>
                                        <DataTable.Cell numeric>{menuItem.containsNuts? "yes":"no"}</DataTable.Cell>
                                        <DataTable.Cell numeric>{menuItem.gluetenFree? "yes":"no"}</DataTable.Cell>
                                        <DataTable.Cell numeric>{menuItem.vegan? "yes":"no"}</DataTable.Cell>
                                        <DataTable.Cell numeric >
                                        <Text style={{color:Colors.green800}}>${`${menuItem.primaryPrice}.${menuItem.fractionalPrice}`}</Text>
                                        </DataTable.Cell>
                                    </DataTable.Row>  
                                ))}

                                {
                                    this.props.add?
                                    <DataTable.Row key = "additemKey">
                                        <DataTable.Cell >+</DataTable.Cell>
                                        <DataTable.Cell numeric></DataTable.Cell>
                                        <DataTable.Cell numeric></DataTable.Cell>
                                        <DataTable.Cell numeric></DataTable.Cell>
                                        <DataTable.Cell numeric></DataTable.Cell>
                                        <DataTable.Cell 
                                            numeric 
                                            onPress={()=>this.props.addfnc()}
                                        >
                                            <Text style={{color:Colors.green400}}>+ Add</Text>
                                        </DataTable.Cell>
                                       
                                    </DataTable.Row>
                                    :
                                    <React.Fragment></React.Fragment>
            
                                }

                            
                            </DataTable>
                        </List.Section>
                    </React.Fragment>
                }
            </React.Fragment>
            
        )
    }
}