import * as React from 'react';
import { 
    Button,Text,Paragraph, Searchbar,Subheading,Title,DataTable,
    Divider,FAB ,Surface,TextInput ,RadioButton
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
            hasGMO:false,
            hasGF:false,
            onlyGMO:false,
            onlyGF:false,
        }
    };

    updateState = (value,key) => {
        this.setState({[key]:{ ...this.state[key],...value }}) // 
    }



    render() {
        return(
            <ScrollView>
                <React.Fragment>
                    {/* <Title style={{textAlign: 'center'}}>
                        Please enter the below information to
                    </Title> */}
                    <Subheading style={{textAlign: 'center'}}>
                    Please enter the below information to create a company.
                    {JSON.stringify(this.state)}
                    </Subheading >
                    <Divider  style = {{padding:1}}/>

                    <View style = {{marginLeft:15,marginRight:15}}>
                        <Financial state={this.state} updateState={this.updateState}/>
                    </View>
                    <Divider  style = {{padding:1}}/>

                    <View style = {{marginLeft:15,marginRight:15}}>
                        <Title>Dietary</Title>
                        <Subheading>Does you menu contain any GMO free products?</Subheading>
            
                        <Text>First</Text>
            
                        {/* this.updateState({
                                    [value]:!this.state.dietary[value]
                                },'dietary') */}
                    </View>



                </React.Fragment>
            </ScrollView>
        )
    }

    
}

const Financial = (props) => {
    return (
        <React.Fragment>
            <Title>Financial</Title>
            <Subheading>ein:</Subheading>
            <TextInput
                label='ein'
                value={props.state.financial.ein}
                onChangeText={ein => props.updateState({ein},'financial')}
                style={styles.inputSpace}
            />

            <Subheading>State Code:</Subheading>
            <TextInput
                label='State Code'
                value={props.state.financial.stateCode}
                onChangeText={stateCode => props.updateState({stateCode},'financial')}
                style={styles.inputSpace}
            />

            <Subheading>Country:</Subheading>
            <TextInput
                label='Country'
                value={props.state.financial.country}
                onChangeText={country => props.updateState({country},'financial')}
                style={styles.inputSpace}
            />
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