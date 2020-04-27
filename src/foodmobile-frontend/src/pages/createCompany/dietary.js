import * as React from 'react';
import { 
    Button,Text,Paragraph, Searchbar,Subheading,Title,DataTable,
    Divider,FAB ,Surface,TextInput ,RadioButton,List,Checkbox
} from 'react-native-paper';

const Dietary = (props) => {
    const styles = {props}
    return (
        
        <React.Fragment>
            <Title style={{textDecorationLine: 'underline'}}>Dietary</Title>
            <Subheading style={{fontWeight: 'bold'}}>Does you menu contain any GMO free products?</Subheading>
            <RadioButton.Group
                onValueChange={gmoCode => props.updateState({gmoCode},'dietary')}
                value={props.state.dietary.gmoCode}
            >
                <List.Item
                    // title={"Has some GMO free items."}
                    key={"someGMOFree"}
                    left={() => (
                        <RadioButton.Item label ="Has some GMO free items."  value="0" />
                    )}
                />
                <List.Item
                    //title={"All items are GMO free."}
                    key={"allGMOFree"}
                    left={() => (
                        <RadioButton.Item label ="All items are GMO free." value="1" />
                    )}
                />
                <List.Item
                    //title={"None are GMO free."}
                    key={"noneGMOFree"}
                    left={() => (
                        <RadioButton.Item label ="None are GMO free." value="2" />
                    )}
                />
            </RadioButton.Group>
            {
                props.state.error.gmoCode === true?
                <Text style={{color:'red'}}>Please select an option</Text>
                :
                <React.Fragment/>
            }

            <Subheading style={{fontWeight: 'bold'}}>Are some/all/none of the menu items Glueten Free?</Subheading>
            <RadioButton.Group
                onValueChange={isGlutenFree => props.updateState({isGlutenFree},'dietary')}
                value={props.state.dietary.isGlutenFree}
            >
                <List.Item
                    //title={"Some items are Glueten Free"}
                    key={"SomeGlutenFree"}
                    left={() => (
                        <RadioButton.Item label ="Some items are Glueten Free" value="0" />
                    )}
                />
                <List.Item
                    //title={"All items are Gluten free."}
                    key={"AllGlutenFree"}
                    left={() => (
                        <RadioButton.Item label ="All items are Gluten free." value="1" />
                    )}
                />
                <List.Item
                    //title={"None are Gluten free."}
                    key={"NoneGluetenFree"}
                    left={() => (
                        <RadioButton.Item label ="None are Gluten free." value="2" />
                    )}
                />
            </RadioButton.Group>
            {
                props.state.error.isGlutenFree === true?
                <Text style={{color:'red'}}>Please select an option</Text>
                :
                <React.Fragment/>
            }

            <Subheading style={{fontWeight: 'bold'}}>What are the vegan options?</Subheading>
            <RadioButton.Group
                onValueChange={onlyVegan => props.updateState({onlyVegan},'dietary')}
                value={props.state.dietary.onlyVegan}
            >
                <List.Item
                    //title={"Some items are Vegan"}
                    key={"SomeVegan"}
                    left={() => (
                        <RadioButton.Item label = "Some items are Vegan" value="0" />
                    )}
                />
                <List.Item
                    //title={"All items are Vegan."}
                    key={"AllVegan"}
                    left={() => (
                        <RadioButton.Item label = "All items are Vegan." value="1" />
                    )}
                />
                <List.Item
                    //title={"None are Vegan."}
                    key={"NoneVegan"}
                    left={() => (
                        <RadioButton.Item label = "None are Vegan." value="2" />
                    )}
                />
            </RadioButton.Group>
            {
                props.state.error.onlyVegan === true?
                <Text style={{color:'red'}}>Please select an option</Text>
                :
                <React.Fragment/>
            }

            <Subheading style={{fontWeight: 'bold'}}>
                Please check for <Text style={{color:'green',fontWeight: 'bold'}}>yes</Text>, 
                or leave unchecked for <Text style={{color:'red',fontWeight: 'bold'}}>no</Text>.
            </Subheading>
            <List.Item
                title={"Does any item contain nuts?"}
                key={"nuts"}
                left={() => (
                    <Checkbox
                        //label="Does any item contain nuts?"
                        status={props.state.dietary.nuts ? 'checked' : 'unchecked'}
                        onPress={() => props.updateState({nuts:!props.state.dietary.nuts},'dietary')}
                    />
                )}
            />
            <Subheading style={{fontWeight: 'bold'}}>
               Enter the name of the genre of your foodtruck
            </Subheading>
            <TextInput
                label='Food Genre'
                value={props.state.dietary.genre}
                onChangeText={(genre) => props.updateState({genre:genre},'dietary')}
                error = {props.state.error.genre}
            />
            {
                props.state.error.genre === true?
                <Text style={{color:'red'}}>Please enter a genre for you food truck</Text>
                :
                <React.Fragment/>
            }

            {/* <List.Item
                title={"Is the menu only vegan?"}
                key={"vegan"}
                left={() => (
                    <Checkbox
                        status={props.state.dietary.onlyVegan ? 'checked' : 'unchecked'}
                        onPress={() => props.updateState({onlyVegan:!props.state.dietary.onlyVegan},'dietary')}
                    />
                )}
            />  */}

          
        </React.Fragment>
    )
}

export default Dietary