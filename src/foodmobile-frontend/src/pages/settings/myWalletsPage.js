import React, {useState} from 'react';
import { Checkbox,List,Divider,Text } from 'react-native-paper';
import { View,ScrollView,SafeAreaView,FlatList,Image } from 'react-native';
import { useScreens } from 'react-native-screens';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const fakeCard = require('../../../assets/fakeCard.png')
const fakeCard2 = require('../../../assets/fakeCard2.png')
const fakeCard3 = require('../../../assets/fakeCard3.jpg')



import CreateWallet from '../../components/createWallet'
export default function MyWallets(props) {

    
    return (
        <ScrollView>
            <CreateWallet
                title="Primary Card" 
                cardType = "debit card" 
                color = "#00b300"
                cardId='XXXX - XXXX - XXXX - 420'
                userName='Doug Dimmadome'
                image={fakeCard}
                {...props}
            />

            <CreateWallet
                title="2nd Card" 
                cardType = "credit card" 
                color = "#FF6347"
                cardId='XXXX - XXXX - XXXX - 1337'
                userName='Danny Phantom'
                image={fakeCard2}
                {...props}
            />

            <CreateWallet
                title="3rd Card" 
                cardType = "not existant card" 
                color = "#000000"
                cardId='XXXX - XXXX - XXXX - 4242'
                userName='John Cena'
                image={fakeCard3}
                {...props}
            />

            

        </ScrollView>
    );
}