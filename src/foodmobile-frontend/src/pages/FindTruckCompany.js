import * as React from 'react';
import { Button,Text,Paragraph, Searchbar,Subheading,Title,DataTable    } from 'react-native-paper';
import PreferencesContext from '../context/context'
import { StyleSheet } from "react-native";
import axios from 'axios'
import { View } from 'react-native';

export default class FindTruckCompany extends React.Component{
    state = {
        searchQuery: '',
      };
    
    _onChangeSearch = query => this.setState({ searchQuery: query });
    render() {

        const { searchQuery } = this.state;

        return (
            <React.Fragment>
                <Title style={{textAlign: 'center'}}>
                    Enter Company name/id
                </Title>
                <Subheading style={{textAlign: 'center'}}>
                    Please enter the company name or id to which you belong to.
                </Subheading >
                <View style = {{margin:15}}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={this._onChangeSearch}
                        value={searchQuery}
                        
                    />
                    

                    {
                        searchQuery?
                        <ShowFakeQuery searchQuery={searchQuery}/>
                        :
                        <Text>{searchQuery}</Text>
                    }
                </View>
                
            </React.Fragment>
           
        )
    }
}

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