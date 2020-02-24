import React, {useState} from 'react';
import { Checkbox,List,Divider,Text } from 'react-native-paper';
import { View,ScrollView,SafeAreaView,FlatList,Image } from 'react-native';
import { useScreens } from 'react-native-screens';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


import ScreenNames from '../screenNames'
export default function CreateWallet(props) {
    const {editWallet} = ScreenNames.stackPages
    return(
        <Card style={{marginLeft:40,marginRight:40,marginTop:10}}>
            <Card.Title 
                title={props.title}
                subtitle={props.cardType}
                titleStyle={{color:props.color}}
            />
            <Card.Content>
                <Title>{props.cardId}</Title>
                <Paragraph>{props.userName}</Paragraph>
            </Card.Content>
            
            <Card.Cover style={{margin:10}} source={props.image} />
            <Card.Actions>
                <Button
                    onPress={()=> {
                        props.navigation.navigate(editWallet.screenName, {
                            cardName:props.cardType,
                            cardId:props.cardId,
                            cardImage:props.image
                        });
                    }}
                >
                    Edit
                </Button>
            </Card.Actions>
        </Card>

    )
}