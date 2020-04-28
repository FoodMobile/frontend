import * as React from 'react';
import { 
    Button,Subheading,
    Divider, Text,TextInput,Title,Checkbox ,List
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import { View,ScrollView } from 'react-native';
import axios from 'axios'

export default class AddItem extends React.Component {
    
    state ={
        ingredientList:'',
        description:'',
        title:'',
        glutenFree:false,
        noGmo:false,
        cookedNearNuts:false,
        cookedNearShellfish:false,
        containsShellfish:false,
        vegan:false,
        primaryPrice:'0',
        fractionalPrice:'0'
    }

    async componentDidMount() {
       if(this.props?.route?.params?.item) {
           this.setState({
               ...item
           })
       }
    }

    async addItem() {
        let payloadAddItem = new URLSearchParams();

        const {
            ingredientList,
            description,
            title,
            glutenFree,
            noGmo,
            cookedNearNuts,
            cookedNearShellfish,
            containsShellfish,
            vegan, 
            primaryPrice,
            fractionalPrice
        } = this.state
        payloadAddItem.append("businessGuid",this.context.userState.userData.companyGuid)
        payloadAddItem.append("ingredientsList",ingredientList)
        payloadAddItem.append("description",description)
        payloadAddItem.append("title",title)
        payloadAddItem.append("glutenFree",glutenFree)
        payloadAddItem.append("noGMOs",noGmo)
        payloadAddItem.append("cookedNearNuts",cookedNearNuts)
        payloadAddItem.append("cookedNearShellfish",cookedNearShellfish)
        payloadAddItem.append("containsShellfish",containsShellfish)
        payloadAddItem.append("vegan",vegan)
        payloadAddItem.append("primaryPrice",parseInt(primaryPrice))
        payloadAddItem.append("fractionalPrice",parseInt(fractionalPrice))

        //console.log(payloadAddItem)
        
        try {
            const resAddItem = await axios.post(`${this.context.ip}${this.context.endpoints.createItem}`, payloadAddItem)
            //console.log('ITEM',resAddItem.data)
            //console.log('PAYLOAD',payloadAddItem)
            //console.log(this.context.userState.userData)
            console.log(resAddItem.data)
            // console.log(resAddItem.data)
            if(resAddItem.data.success) {
                alert("Item created!")
            }
        } catch(err) {
            console.log(err.response.data.message)
        }
        
    }
    render() {
        return (
            <ScrollView>
            <React.Fragment>
                <Subheading style={{textAlign: 'center',}}>
                    Please enter the below information to add/edit a new item.
                    {/* {JSON.stringify(this.state)} */}
                </Subheading >
                <Title style={{textDecorationLine: 'underline'}}>Name of food</Title>
                <Text>Whats your item called</Text>
                <TextInput
                    label='Food item'
                    value={this.state.title}
                    onChangeText={text => this.setState({ title:text })}
                />

                <Title style={{textDecorationLine: 'underline'}}>List of ingredients:</Title>
                <Text>comma separated, no space between commas,</Text>
                <TextInput
                    label='appels,beans,sauce'
                    value={this.state.ingredientList}
                    onChangeText={text => this.setState({ ingredientList:text })}
                />

                <Title style={{textDecorationLine: 'underline'}}>Description:</Title>
                <Text>Tell us a little bit about this item</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    label='Funky fresh new cuisine'
                    value={this.state.description}
                    onChangeText={text => this.setState({ description:text })}
                />

                <Title style={{textDecorationLine: 'underline'}}>Ingriedent/cooking information:</Title>
                <Subheading style={{fontWeight: 'bold'}}>
                    Please check for <Text style={{color:'green',fontWeight: 'bold'}}>yes</Text>, 
                    or leave unchecked for <Text style={{color:'red',fontWeight: 'bold'}}>no</Text>.
                </Subheading>

                <List.Item
                    title={"Is Gluten Free?"}
                    key={"gluetenFree"}
                    left={() => (
                        <Checkbox
                            //label="Does any item contain nuts?"
                            status={this.state.glutenFree ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({glutenFree:!this.state.glutenFree})}
                        />
                    )}
                />
                <List.Item
                    title={"Has no GMO content?"}
                    key={"noGMO"}
                    left={() => (
                        <Checkbox
                            //label="Does any item contain nuts?"
                            status={this.state.noGmo ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({noGmo:!this.state.noGmo})}
                        />
                    )}
                />
                <List.Item
                    title={"Cooked near nuts?"}
                    key={"nearNuts"}
                    left={() => (
                        <Checkbox
                            //label="Does any item contain nuts?"
                            status={this.state.cookedNearNuts ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({cookedNearNuts:!this.state.cookedNearNuts})}
                        />
                    )}
                />
                <List.Item
                    title={"Cooked near shellfish?"}
                    key={"nearShellfish"}
                    left={() => (
                        <Checkbox
                            //label="Does any item contain nuts?"
                            status={this.state.cookedNearShellfish ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({cookedNearShellfish:!this.state.cookedNearShellfish})}
                        />
                    )}
                />
                <List.Item
                    title={"Contaisn shellfish?"}
                    key={"containsShellfish"}
                    left={() => (
                        <Checkbox
                            //label="Does any item contain nuts?"
                            status={this.state.containsShellfish ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({containsShellfish:!this.state.containsShellfish})}
                        />
                    )}
                />
                <List.Item
                    title={"Is vegan?"}
                    key={"isVegan"}
                    left={() => (
                        <Checkbox
                            //label="Does any item contain nuts?"
                            status={this.state.vegan ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({vegan:!this.state.vegan})}
                        />
                    )}
                />

                <Title style={{textDecorationLine: 'underline'}}>Price:</Title>
                <Text>Primary Price: Base price</Text>
                <TextInput
                    label='$5'
                    value={this.state.primaryPrice}
                    onChangeText={text => this.setState({ primaryPrice:text })}
                />

                <Text>Fractional Price</Text>
                <TextInput
                    label='$5'
                    value={this.state.fractionalPrice}
                    onChangeText={text => this.setState({ fractionalPrice:text })}
                />
                             
                <Button 
                    //icon="camera" 
                    mode="contained" 
                    onPress={() => this.addItem()}
                    style={{marginBottom:10,borderRadius: 0,marginTop:10}}
                >
                    Add Item
                </Button>      
            </React.Fragment>
            </ScrollView>
        )
    }
}

AddItem.contextType = PreferencesContext;
