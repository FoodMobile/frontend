import React from 'react';
import { View } from 'react-native';
import { Button,Text } from 'react-native-paper';

export default function Test(props) {
  
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Am Test page wowe {Math.random()}</Text>
        </View>
    )
}