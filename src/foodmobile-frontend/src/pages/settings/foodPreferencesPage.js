import React, {useState} from 'react';
import { Checkbox,List,Divider,Text } from 'react-native-paper';
import { View,ScrollView,SafeAreaView,FlatList } from 'react-native';
import { useScreens } from 'react-native-screens';

function generateListItem(key,state,stateUpdate) {
    return(
        <List.Item
            title={key}
            key={key}
            left={() => (
                <Checkbox
                    status={state[key] ? 'checked' : 'unchecked'}
                    onPress={() => {
                        state[key]=!state[key]
                        stateUpdate(state)
                        console.log(key,'===========')
                    }}
                />
            )}
        />
    )
}

export default function FoodPreferences(props) {

    const[allergies,setAllergies] = useState({
        peanut:false,
        milk:true,
        ligma:true
    })

    function updateAllergies(state){
        let newAllergies = {
            ...allergies,
            ...state
        }
        setAllergies(newAllergies)
    }

    const [foodTypes,setFoodTypes] = useState({
        halal:true,
        vegan:false,
        vegitarian:false
    })

    function updateFoodTypes(state){
        let newFoodTypes = {
            ...foodTypes,
            ...state
        }
        setFoodTypes(newFoodTypes)
    }
    return (
        <ScrollView>
            <List.Section>
                <List.Subheader>Food Allergies</List.Subheader>
                {
                    Object.keys(allergies).map(function(key, value){
                        return(
                            generateListItem(key,allergies,updateAllergies)
                        )
                    })
                }        
            </List.Section>
            {/* <Text>
                        {JSON.stringify(allergies)}
            </Text> */}
            <Divider style={{padding:2,marginTop:10}}/>
            <List.Section>
                <List.Subheader>Food Types</List.Subheader>
                {
                    Object.keys(foodTypes).map(function(key, value){
                        return(
                            generateListItem(key,foodTypes,updateFoodTypes)
                        )
                    })
                }        
            </List.Section>
            {/* <Text>
                {JSON.stringify(foodTypes)}
            </Text> */}
            {/* <Divider style={{padding:2,marginTop:10}}/>
            <List.Section>
                <List.Subheader>Food Allergies</List.Subheader>
                {
                    Object.keys(allergies).map(function(key, value){
                        return(
                            generateListItem(key,allergies,updateAllergies)
                        )
                    })
                }        
            </List.Section> */}
        </ScrollView>
    );
}