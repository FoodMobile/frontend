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
import {decode as atob, encode as btoa} from 'base-64'

import Financial from './createCompany/financial'

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

    checkFinancial() {
        const  financial = this.state.financial
        let noErrors = true;
        let errorValuesToUpdate = {}

        //Check EIN
        const einTest = this.regexList.ein.test(financial.ein)
        if(!einTest) {
            errorValuesToUpdate.ein = true
            //this.updateError({ein:true})
            noErrors = false
        }

        //Check statecode
        const stateCodeTest = this.regexList.stateCode.test(financial.stateCode)
        if(!stateCodeTest) {
            errorValuesToUpdate.stateCode = true
            //this.updateError({stateCode:true})
            noErrors = false
        }

        //Check country code
        const countryTest = this.regexList.country.test(financial.country)
        if(!countryTest) {
            errorValuesToUpdate.country = true
            noErrors = false
        }


        if(financial.companyName.length === 0) {
            errorValuesToUpdate.companyName = true
            noErrors = false
        }

        //if no errors
        if(noErrors) {
            return true
    
        } else {
            this.updateError({...errorValuesToUpdate})
            return false
        }

       
    }

    async submitedFinancialInfo() {
        const financial = this.state.financial
        let payload = new URLSearchParams();
        payload.append("ein",financial.ein)
        payload.append("stateCode",financial.stateCode)
        payload.append("country",financial.country)

        try {
            const res = await axios.post(`${this.context.ip}${this.context.endpoints.createFinancial}`, payload)
            return res.data
        } catch(error) {
            console.log(error);
            alert(error)
            return {}
        }
    }

    checkGenre() {
        if(this.state.dietary.genre.length < 1) {
            this.updateError({genre:true})
            return false
        } else {
           return true
        }
    }

    async submitGenreInfo() {
        let payload = new URLSearchParams();
        payload.append("genre",this.state.dietary.genre)

        try {
            const res = await axios.post(`${this.context.ip}${this.context.endpoints.createGenre}`, payload)
            return res.data
        } catch(error) {
            console.log(error);
            alert(error)
            return {}
        }
    }

    checkDietary() {

        let anyErrors = false
        const dietary = this.state.dietary
        const {
            gmoCode,
            nuts,
            onlyVegan,
            isGlutenFree
        } = dietary
        let errorValuesToUpdate = {}

        // console.log('gmoCode',dietary.gmoCode)
        // //console.log('nuts',dietary.nuts)
        // console.log('onlyVegan',dietary.onlyVegan)
        // console.log('isGlutenFree',dietary.isGlutenFree)

        if(gmoCode.length === 0 ) {
            anyErrors = true
            errorValuesToUpdate.gmoCode = true
        }

        
        if(onlyVegan === false ) {
            anyErrors = true
            errorValuesToUpdate.onlyVegan = true
        }

       
        if(isGlutenFree == -1 ) {
            anyErrors = true
            errorValuesToUpdate.isGlutenFree = true
        }
        
       
       
        if(anyErrors) {
            this.updateError({...errorValuesToUpdate})
            return false
        } else {
            return true
        }
    }

    async submitDietaryInfo(genreId) {
        let payload = new URLSearchParams();
        const {
            gmoCode,
            nuts,
            onlyVegan,
            isGlutenFree
        } = this.state.dietary

        payload.append("usesNuts",nuts)
        
        switch (gmoCode) {
            case "0":
                payload.append("hasGMO",true)
                payload.append("onlyGMO",false)
                break;

            case "1":
                payload.append("hasGMO",true)
                payload.append("onlyGMO",true)
                break;

            case "2":
                payload.append("hasGMO",false)
                payload.append("onlyGMO",false)
                break;
    
            default:
                break;
        }

        switch (onlyVegan) {
            case "0":
                payload.append("veganOptions",true)
                payload.append("onlyVegan",false)
                break;

            case "1":
                payload.append("veganOptions",true)
                payload.append("onlyVegan",true)
                break;

            case "2":
                payload.append("veganOptions",false)
                payload.append("onlyVegan",false)
                break;
    
            default:
                break;
        }

        switch (isGlutenFree) {
            case "0":
                payload.append("hasGF",true)
                payload.append("onlyGF",false)
                break;

            case "1":
                payload.append("hasGF",true)
                payload.append("onlyGF",true)
                break;

            case "2":
                payload.append("hasGF",false)
                payload.append("onlyGF",false)
                break;
    
            default:
                break;
        }

        payload.append("genreId",genreId)

        try {
            const res = await axios.post(`${this.context.ip}${this.context.endpoints.createDietary}`, payload)
            return res.data
        } catch(error) {
            console.log(error);
            alert(error)
            return {}
        }
    }

    async submitCreateCompany() {
        if(this.checkFinancial() === false) {
            alert('Error in financial section')
            return false
        }
       
        if(this.checkGenre() === false) {
            alert('Error in genre section')
            return false
        }

  
        if(this.checkDietary() === false) {
            alert('Error in dietary section')
            return false
        }

        //If all checks pass
        const createdFinancialInfo = await this.submitedFinancialInfo();
        const createdGenreInfo = await this.submitGenreInfo()
        const createdDietaryInfo = await this.submitDietaryInfo(createdGenreInfo.data.guid)

        // console.log('CREATED FIN',createdFinancialInfo)
        // console.log('CREATED GENRE ',createdGenreInfo)
        // console.log('CREATED DIETARY ',createdDietaryInfo)

        const financialGUID = createdFinancialInfo?.data?.guid
        const dietaryGUID = createdDietaryInfo?.data?.guid
        const userGUID = this.context?.userState?.userData?.guid
        const name = this.state.financial.companyName;
        // console.log({
        //     name,
        //     financialGUID,
        //     dietaryGUID,
        //     userGUID
        // })

        let payload = new URLSearchParams();
        payload.append("name",name)
        payload.append("financialInfo",financialGUID)
        payload.append("dietaryInfo",dietaryGUID)
        payload.append("userGuid",userGUID)

        try {
            const res = await axios.post(`${this.context.ip}${this.context.endpoints.createCompany}`, payload)
            console.log(res.data)
            alert('Company Created!')

            const {mySettings} = screenNames.stackPages
            this.props.navigation.navigate(mySettings.screenName)
        } catch(error) {
            //console.log(error);
            alert(error)
            //return {}
        }

        //console.log(this.context.userState.userData.guid)

        
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
                        <Dietary state={this.state} updateState={this.updateState} setState={this.setState}/>
                    </View>

                   

                    

                    </View>      
                    <Divider  style = {{padding:1}}/>                   
                    <Button 
                        //icon="camera" 
                        mode="contained" 
                        onPress={() => this.submitCreateCompany()}
                        style={{marginBottom:10,borderRadius: 0,}}
                    >
                        Create Company
                    </Button>      

                </React.Fragment>
            </ScrollView>
        )
    }

    
}

// const Financial = (props) => {
//     return (
//         <React.Fragment>
//             <Title style={{textDecorationLine: 'underline'}}>Financial</Title>

//             <Subheading style={{fontWeight: 'bold'}}>Company Name</Subheading>
//             <TextInput
//                 label='Company Name'
//                 value={props.state.financial.companyName}
//                 onChangeText={companyName => props.updateState({companyName},'financial')}
//                 style={styles.inputSpace}
//                 error = {props.state.error.companyName}
//             />

//             {
//                 props.state.error.companyName === true?
//                 <Text style={{color:'red'}}>Please enter company name</Text>
//                 :
//                 <React.Fragment/>
//             }

//             <Subheading style={{fontWeight: 'bold'}}>ein: XX-XXXXXXX, total 9 digits</Subheading>
//             <TextInput
//                 label='ein: 12-1234567'
//                 value={props.state.financial.ein}
//                 onChangeText={ein => props.updateState({ein},'financial')}
//                 style={styles.inputSpace}
//                 error = {props.state.error.ein}
//                 disabled = {true}
//             />

//             {
//                 props.state.error.ein === true?
//                 <Text style={{color:'red'}}>Please enter numbers only in the format of XX-XXXXXXX</Text>
//                 :
//                 <React.Fragment/>
//             }
           

//             <Subheading style={{fontWeight: 'bold'}}>State Code: 2 letter code</Subheading>
//             <TextInput
//                 label='State Code: NC'
//                 value={props.state.financial.stateCode}
//                 onChangeText={stateCode => props.updateState({stateCode},'financial')}
//                 style={styles.inputSpace}
//                 error = {props.state.error.stateCode}
//             />

//             {
//                 props.state.error.stateCode === true?
//                 <Text style={{color:'red'}}>Please enter 2 letter state code</Text>
//                 :
//                 <React.Fragment/>
//             }

//             <Subheading style={{fontWeight: 'bold'}}>Country: 3 letter code</Subheading>
//             <TextInput
//                 label='Country:USA'
//                 value={props.state.financial.country}
//                 onChangeText={country => props.updateState({country},'financial')}
//                 style={styles.inputSpace}
//                 error = {props.state.error.country}
//             />
//             {
//                 props.state.error.country === true?
//                 <Text style={{color:'red'}}>Please enter 3 letter country code</Text>
//                 :
//                 <React.Fragment/>
//             }
//         </React.Fragment>
//     )
// }


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
                    key={"someGMOFree"}
                    left={() => (
                        <RadioButton value="0" />
                    )}
                />
                <List.Item
                    title={"All items are GMO free."}
                    key={"allGMOFree"}
                    left={() => (
                        <RadioButton value="1" />
                    )}
                />
                <List.Item
                    title={"None are GMO free."}
                    key={"noneGMOFree"}
                    left={() => (
                        <RadioButton value="2" />
                    )}
                />
            </RadioButton.Group>
            {
                props.state.error.gmoCode === true?
                <Text style={{color:'red'}}>Please select an option</Text>
                :
                <React.Fragment/>
            }

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
                    title={"All items are Gluten free."}
                    key={"AllGlutenFree"}
                    left={() => (
                        <RadioButton value="1" />
                    )}
                />
                <List.Item
                    title={"None are Gluten free."}
                    key={"NoneGluetenFree"}
                    left={() => (
                        <RadioButton value="2" />
                    )}
                />
            </RadioButton.Group>
            {
                props.state.error.isGlutenFree === true?
                <Text style={{color:'red'}}>Please select an option</Text>
                :
                <React.Fragment/>
            }

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
            {
                props.state.error.onlyVegan === true?
                <Text style={{color:'red'}}>Please select an option</Text>
                :
                <React.Fragment/>
            }


            
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
                value={props.state.dietary.genre}
                onChangeText={(genre) => props.updateState({genre:genre},'dietary')}
                error = {props.state.error.genre}
            />
            {
                props.state.error.genre === true?
                <Text style={{color:'red'}}>Please enter a genre for you food truck</Text>
                :
                <React.Fragment/>
            }

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