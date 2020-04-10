import React, {useState} from 'react';
import { View,ScrollView,SafeAreaView,FlatList,Image,StyleSheet  } from 'react-native';
import { useScreens } from 'react-native-screens';
import { List, Checkbox, DataTable ,Avatar, Button, Card, Title, Paragraph,TextInput,Text, IconButton,Colors } from 'react-native-paper';
import myFoodTrucks from '../../components/data/myFoodTrucks'
import { render } from 'react-dom';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default class ViewMapTruck extends React.Component {
    state = {
        favorited: false
    }

    render() {
        const {truckId } = this.props.route.params;

        const myTruck = (myFoodTrucks.filter(truck => truck.id == truckId))[0]

        function handleFav(This) {
            This.setState({
                favorited: !This.state.favorited
            })
        }
        //console.log(myTruck)
        return (
         
            <ScrollView>
                {/* <Title style={{marginLeft:10,marginRight:10,marginTop:10}}>Truck</Title> */}
                <List.Section title="About Food Truck">
                <Card style={{marginLeft:10,marginRight:10,marginTop:10}}>
                    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                    <Card.Content>
                        <Title>{myTruck.name}</Title>
                        <Paragraph style={{color:'dodgerblue'}}>{myTruck.description}</Paragraph>
                        <Paragraph style={{color:'green'}}>{myTruck.distance} miles away</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: myTruck.icon }} />
                    <Card.Content>
                        <Title>More about {myTruck.name}</Title>
                        <Paragraph >{myTruck.longDesc}</Paragraph>
                    </Card.Content>
                    <Card.Actions>

                    
                    <Button 
                        icon={this.state.favorited? "heart":"heart-outline"}
                        mode="text" 
                        onPress={()=>handleFav(this)} 
                        color = {Colors.yellow700}   
                    >
                        Favorited
                    </Button>
                    <Button icon="cart-minus" mode="text" onPress={() => console.log(this.state.favorited )} color = {Colors.blue700}>
                    Order Now
                    </Button>
                        
                    </Card.Actions>
                </Card>
                </List.Section>

                {/* <List.Section title="Accordions"> */}
                    {/* <List.Accordion
                    title="Uncontrolled Accordion"
                    // left={props => <List.Icon {...props} icon="folder" />}
                    >
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion> */}

                {/* </List.Section> */}

                {/* <Title style={{marginLeft:10,marginRight:10,marginTop:10}}>Menu</Title> */}
                <List.Section title="Menu">
                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>Item</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                    <DataTable.Title numeric>Price</DataTable.Title>
                    </DataTable.Header>

                    {myTruck.menu.map((menuItem, index) => ( 
                        <DataTable.Row key = {menuItem+" "+index}>
                            <DataTable.Cell onPress={()=>alert('This is a food, insert desc of food here')}>{menuItem.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{menuItem.cal}</DataTable.Cell>
                            <DataTable.Cell numeric>{menuItem.fat}</DataTable.Cell>
                            <DataTable.Cell numeric >
                                <Text style={{color:Colors.green800}}>${menuItem.price}</Text>
                            </DataTable.Cell>
                        </DataTable.Row>  
                    ))}

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
                </List.Section>
                
                
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    stretch: {
        flex:1,
        width: 350, height: 350,
        resizeMode: 'contain'
    }
});