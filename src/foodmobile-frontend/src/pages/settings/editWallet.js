import React, {useState} from 'react';
import { Checkbox,List,Divider,Text } from 'react-native-paper';
import { View,ScrollView,SafeAreaView,FlatList,Image,StyleSheet  } from 'react-native';
import { useScreens } from 'react-native-screens';
import { Avatar, Button, Card, Title, Paragraph,TextInput } from 'react-native-paper';


export default function EditWallet(props) {

    const { cardName,cardId,cardImage } = props.route.params;
    const[inputCardId,setCardId] = useState(cardId)
    const[inputCardName,setCardName] = useState(cardName)

    return (
        <ScrollView>
            <TextInput
                label='Email'
                value={inputCardId}
                onChangeText={text => setCardId( text )}
            />

            <TextInput
                label='Email'
                value={inputCardName}
                onChangeText={text => setCardName( text )}
            />
            <Image
            style={styles.stretch}
            source={cardImage}
            />
            
         
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    stretch: {
        flex:1,
        width: 350, height: 350,
        resizeMode: 'contain'
    }
  });