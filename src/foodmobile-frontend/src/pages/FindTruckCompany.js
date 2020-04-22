import * as React from 'react';
import { 
    Button,Text,Paragraph, Searchbar,Subheading,Title,DataTable,
    Divider,FAB 
} from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import axios from 'axios'
import { View,ScrollView } from 'react-native';
import screenNames from '../screenNames'

export default class FindTruckCompany extends React.Component{
    state = {
        searchQuery: undefined,
      };
    
    _onChangeSearch = query => this.setState({ searchQuery: query });

    navigateToCreateCompany = () => {
        this.props.navigation.navigate(screenNames.stackPages.createCompany.screenName)
    }
    render() {

        const { searchQuery } = this.state;

        return (
            
                <React.Fragment>
                    <ScrollView style={{marginBottom:70}}>
                        <Title style={{textAlign: 'center'}}>
                            Enter Company name/id
                        </Title>
                        <Subheading style={{textAlign: 'center'}}>
                            Please enter the company name or id to which you belong to.
                        </Subheading >
                        <View >
                            <Searchbar
                                placeholder="Search"
                                onChangeText={this._onChangeSearch}
                                value={searchQuery}
                                style = {{margin:15}}
                            />
                            
                            <Divider style = {{padding:1}}/>
                            {
                                !searchQuery ?
                                <React.Fragment>
                                    <Text style = {{margin:15}}>Sorry but this company name/id does not exist. Please make sure name/id is correct or create a new company.</Text>
                                </React.Fragment>
                                :
                                <ShowFakeQuery searchQuery={searchQuery}/>
                            }
                        </View>

                    </ScrollView>
                    
                    <FAB
                        style={styles.fab}
                        small
                        label="Create Company"
                        icon="plus"
                        onPress={this.navigateToCreateCompany}
                    />
                    
                </React.Fragment>
 
           
        )
    }
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })


function ShowFakeQuery(props) {
    const modLength = props.searchQuery.length % 3
    let data = []
    switch(modLength) {
        case 0:
            data = [
                {
                    name:'ZeroInc',
                    id:'0'
                },
                {
                    name:'Zero.LLC',
                    id:'1-1'
                },
                {
                    name:'Zeroz',
                    id:'0!-0!'
                }
            ] 
            break;
        case 1:
            data = [
                {
                    name:'We are number 1',
                    id:'1'
                },
                {
                    name:'Uno',
                    id:'1!'
                },
                {
                    name:'I',
                    id:'II-I'
                }
            ] 
            break;
        case 2:
            data = [
                {
                    name:'Dynamic Duo',
                    id:'2'
                },
                {
                    name:'Trouble Twins',
                    id:'0100'
                },
                {
                    name:'Double Dose of Danger',
                    id:'sqrt(4)'
                }
            ] 
            break;
        default:
          // code block
    }
    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>Id</DataTable.Title>
                {/* <DataTable.Title numeric>Fat</DataTable.Title> */}
            </DataTable.Header>

            {
                data.map((value,index)=>{
                    return (
                        <DataTable.Row key = {value.name+index+value.id}>
                            <DataTable.Cell>{value.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{value.id}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })
            }

            {/* <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
                <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row> */}

            {/* <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => { console.log(page); }}
            label="1-2 of 6"
            /> */}
        </DataTable>
    )
}