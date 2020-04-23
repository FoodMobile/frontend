import * as React from 'react';
import { 
    Button,Text,Paragraph, Searchbar,Subheading,Title,DataTable,
    Divider,FAB ,Surface,TextInput ,RadioButton,List,Checkbox
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import axios from 'axios'
import { View,ScrollView } from 'react-native';
import screenNames from '../screenNames'

export default class CreateCompany extends React.Component {
    state = {
        financial:{
            ein: '',
            stateCode:'',
            country:'',
        },
        dietary:{
            gmoCode:'',
            nuts:false,
            onlyVegan:false,
            isGlutenFree:-1
        },
        genre:{
            value:''
        }
    };

    updateState = (value,key) => {
        this.setState({[key]:{ ...this.state[key],...value }}) // 
    }



    render() {
        return(
            <ScrollView>
                <React.Fragment>
                    <View style={{marginBottom:50}}>
                    {/* <Title style={{textAlign: 'center'}}>
                        Please enter the below information to
                    </Title> */}
                    <Subheading style={{textAlign: 'center',}}>
                    Please enter the below information to create a company.
                    {JSON.stringify(this.state)}
                    </Subheading >
                    <Divider  style = {{padding:1}}/>

                    <View style = {{marginLeft:15,marginRight:15}}>
                        <Financial state={this.state} updateState={this.updateState}/>
                    </View>
                    <Divider  style = {{padding:1}}/>

                    <View style = {{marginLeft:15,marginRight:15}}>
                        
            
                        {/* this.updateState({
                                    [value]:!this.state.dietary[value]
                                },'dietary') */}
                        <Dietary state={this.state} updateState={this.updateState} setState={this.setState}/>
                    </View>

                   

                    

                    </View>      
                    <Divider  style = {{padding:1}}/>                   
                    <Button 
                        //icon="camera" 
                        mode="contained" 
                        onPress={() => console.log('Pressed')}
                        style={{marginBottom:10,borderRadius: 0,}}
                    >
                        Create Company
                    </Button>      

                </React.Fragment>
            </ScrollView>
        )
    }

    
}

const Financial = (props) => {
    return (
        <React.Fragment>
            <Title style={{textDecorationLine: 'underline'}}>Financial</Title>
            <Subheading style={{fontWeight: 'bold'}}>ein</Subheading>
            <TextInput
                label='ein'
                value={props.state.financial.ein}
                onChangeText={ein => props.updateState({ein},'financial')}
                style={styles.inputSpace}
            />

            <Subheading style={{fontWeight: 'bold'}}>State Code</Subheading>
            <TextInput
                label='State Code'
                value={props.state.financial.stateCode}
                onChangeText={stateCode => props.updateState({stateCode},'financial')}
                style={styles.inputSpace}
            />

            <Subheading style={{fontWeight: 'bold'}}>Country</Subheading>
            <TextInput
                label='Country'
                value={props.state.financial.country}
                onChangeText={country => props.updateState({country},'financial')}
                style={styles.inputSpace}
            />
        </React.Fragment>
    )
}


const Dietary = (props) => {
    return (
        
        <React.Fragment>
            <Title style={{textDecorationLine: 'underline'}}>Dietary</Title>
            <Subheading style={{fontWeight: 'bold'}}>Does you menu contain any GMO free products?</Subheading>
            <RadioButton.Group
                onValueChange={gmoCode => props.updateState({gmoCode},'dietary')}
                value={props.state.dietary.gmoCode}
            >
                <List.Item
                    title={"Has some GMO free items."}
                    key={"1"}
                    left={() => (
                        <RadioButton value="0" />
                    )}
                />
                <List.Item
                    title={"All items are GMO free."}
                    key={"2"}
                    left={() => (
                        <RadioButton value="1" />
                    )}
                />
                <List.Item
                    title={"None are GMO free."}
                    key={"3"}
                    left={() => (
                        <RadioButton value="2" />
                    )}
                />
            </RadioButton.Group>

            <Subheading style={{fontWeight: 'bold'}}>Are some/all/none of the menu items Glueten Free?</Subheading>
            <RadioButton.Group
                onValueChange={isGlutenFree => props.updateState({isGlutenFree},'dietary')}
                value={props.state.dietary.isGlutenFree}
            >
                <List.Item
                    title={"Some items are Glueten Free"}
                    key={"SomeGlutenFree"}
                    left={() => (
                        <RadioButton value="0" />
                    )}
                />
                <List.Item
                    title={"All items are GMO free."}
                    key={"AllGlutenFree"}
                    left={() => (
                        <RadioButton value="1" />
                    )}
                />
                <List.Item
                    title={"None are GMO free."}
                    key={"NoneGluetenFree"}
                    left={() => (
                        <RadioButton value="2" />
                    )}
                />
            </RadioButton.Group>

            <Subheading style={{fontWeight: 'bold'}}>What are the vegan options?</Subheading>
            <RadioButton.Group
                onValueChange={onlyVegan => props.updateState({onlyVegan},'dietary')}
                value={props.state.dietary.onlyVegan}
            >
                <List.Item
                    title={"Some items are Vegan"}
                    key={"SomeVegan"}
                    left={() => (
                        <RadioButton value="0" />
                    )}
                />
                <List.Item
                    title={"All items are Vegan."}
                    key={"AllVegan"}
                    left={() => (
                        <RadioButton value="1" />
                    )}
                />
                <List.Item
                    title={"None are Vegan."}
                    key={"NoneVegan"}
                    left={() => (
                        <RadioButton value="2" />
                    )}
                />
            </RadioButton.Group>


            
            <Subheading style={{fontWeight: 'bold'}}>
                Please check for <Text style={{color:'green',fontWeight: 'bold'}}>yes</Text>, 
                or leave unchecked for <Text style={{color:'red',fontWeight: 'bold'}}>no</Text>.
            </Subheading>
            <List.Item
                title={"Does any item contain nuts?"}
                key={"nuts"}
                left={() => (
                    <Checkbox
                        status={props.state.dietary.nuts ? 'checked' : 'unchecked'}
                        onPress={() => props.updateState({nuts:!props.state.dietary.nuts},'dietary')}
                    />
                )}
            />
            <Subheading style={{fontWeight: 'bold'}}>
               Enter the name of the genre of your foodtruck
            </Subheading>
            <TextInput
                label='Food Genre'
                value={props.state.genre.value}
                onChangeText={(genre) => props.updateState({value:genre},'genre')}
            />

            {/* <List.Item
                title={"Is the menu only vegan?"}
                key={"vegan"}
                left={() => (
                    <Checkbox
                        status={props.state.dietary.onlyVegan ? 'checked' : 'unchecked'}
                        onPress={() => props.updateState({onlyVegan:!props.state.dietary.onlyVegan},'dietary')}
                    />
                )}
            />  */}

          
        </React.Fragment>
    )
}

//const 

const styles = StyleSheet.create({
    inputSpace: {
     
      marginBottom: 16,
    },
  })


CreateCompany.contextType = PreferencesContext;