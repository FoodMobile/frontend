import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { Text,List,Checkbox,  Avatar, Button, Card, IconButton, Colors,Title, Paragraph  } from 'react-native-paper';
//import {getThene} from '../context/styles'
import PreferencesContext from '../context/context'

export default class TruckListCard extends React.Component {
  render() {
    const {
        styles,
        item,
        index
    } = this.props
    return(
        
        <Card style = {this.context.theme=='light'?styles.truckItemContainer: styles.truckItemContainerDark} >
            <Card.Title 
            title={item.username}
            subtitle={item.description} 
            key = {item.name}
            icon = {item.icon}
            left={
                (props) => 
                <Avatar.Image 
                {...props} 
                size={41} 
                source={{ uri: item.icon }} 
                />}
            />
            <Card.Content style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
 
            <Paragraph >{item.distance} miles away</Paragraph>

            <View style={{flexDirection:'row',marginTop:-10}}>
                <IconButton
                icon={ index%2 ==0? "heart-outline": "heart"}
                color={Colors.red200} //Colors.yellow600
                size={25}
                onPress={() => console.log('Pressed')}
                />
                <Button 
                style={{marginTop:5}}
                color={Colors.blue400}
                onPress={()=> {
                    //showMapTruck(this.props.navigation,item.id,viewMapTruck)
                }}
                >
                View
                </Button>
            </View>
            
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            {/* <Card.Actions>
            
            </Card.Actions> */}
        </Card>
    )
  }
}

TruckListCard.contextType = PreferencesContext;