import React, {useState} from 'react';
import { Checkbox } from 'react-native-paper';
import { List,Text } from 'react-native-paper';
import { useScreens } from 'react-native-screens';

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
    return (
        <>
            <List.Section>
                <List.Subheader>Food Allergies</List.Subheader>
                <List.Item
                    title="Peanut"
                    left={() => (
                        <Checkbox
                            status={allergies.peanut ? 'checked' : 'unchecked'}
                            onPress={() => {updateAllergies({peanut:!allergies.peanut}) }}
                        />
                    )}
                />

                <List.Item
                    title="Mlik"
                    left={() => (
                        <Checkbox
                            status={allergies.milk ? 'checked' : 'unchecked'}
                            onPress={() => {updateAllergies({milk:!allergies.milk}) }}
                        />
                    )}
                />

                <List.Item
                    title="Ligma, so sad"
                    left={() => (
                        <Checkbox
                            status={allergies.ligma ? 'checked' : 'unchecked'}
                            onPress={() => {updateAllergies({ligma:!allergies.ligma}) }}
                        />
                    )}
                />
            </List.Section>
            <Text>
                        {JSON.stringify(allergies)}
            </Text>
        </>
    );
}