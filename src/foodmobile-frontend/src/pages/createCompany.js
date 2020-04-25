import * as React from 'react';
import { 
    Button,Subheading,
    Divider
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import { View,ScrollView } from 'react-native';

import Financial from './createCompany/financial'
import Dietary from './createCompany/dietary'

import {
    submitCreateCompany
} from './createCompany/methods'

export default class CreateCompany extends React.Component {
    state = {
        financial:{
            ein: '69-6969690',
            stateCode:'NC',
            country:'USA',
            companyName: 'TEST COMPANY'
        },
        dietary:{
            gmoCode:'',
            nuts:false,
            onlyVegan:false,
            isGlutenFree:-1,
            genre:'abc'
        },
        error:{
            companyName:'',
            ein:'',
            stateCode:'',
            country:'',
            gmoCode:'',
            nuts:'',
            onlyVegan:'',
            isGlutenFree:'',
            genre:''
        }
    };

    regexList = {
        ein: /^\d{2}-\d{7}$/,
        stateCode: /[A-Za-z]{2}/,
        country: /[A-Za-z]{3}/
    }

    updateState = (value,key) => {
        this.setState({[key]:{ ...this.state[key],...value }}) 

        const errorKey = Object.keys(value)[0]

        this.updateError({[errorKey]:false})
        //console.log('key',Object.keys(value))
    }

    updateError = (value,key) => {
        this.setState({
            error:{
                ...this.state.error,
                ...value
            }
        })
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
                    {/* {JSON.stringify(this.state)} */}
                    </Subheading >

                    <Divider  style = {{padding:1}}/>

                    <View style = {{marginLeft:15,marginRight:15}}>
                        <Financial state={this.state} updateState={this.updateState} styles={styles}/>
                    </View>
                    <Divider  style = {{padding:1}}/>

                    <View style = {{marginLeft:15,marginRight:15}}>
                        
            
                        {/* this.updateState({
                                    [value]:!this.state.dietary[value]
                                },'dietary') */}
                        <Dietary state={this.state} updateState={this.updateState} setState={this.setState} styles={styles} />
                    </View>

                   

                    

                    </View>      
                    <Divider  style = {{padding:1}}/>                   
                    <Button 
                        //icon="camera" 
                        mode="contained" 
                        onPress={() => submitCreateCompany(this)}
                        style={{marginBottom:10,borderRadius: 0,}}
                    >
                        Create Company
                    </Button>      

                </React.Fragment>
            </ScrollView>
        )
    }

    
}

const styles = StyleSheet.create({
    inputSpace: {
     
      marginBottom: 16,
    },
  })


CreateCompany.contextType = PreferencesContext;