import * as React from 'react';
import { 
    Text,Subheading,Title,TextInput,Checkbox,List
} from 'react-native-paper';

const Financial = (props) => {
    const {styles} = props
    return (
        <React.Fragment>
            <Title style={{textDecorationLine: 'underline'}}>Financial</Title>

            <Subheading style={{fontWeight: 'bold'}}>Company Name</Subheading>
            <TextInput
                label='Company Name'
                value={props.state.financial.companyName}
                onChangeText={companyName => props.updateState({companyName},'financial')}
                style={styles.inputSpace}
                error = {props.state.error.companyName}
            />

            {
                props.state.error.companyName === true?
                <Text style={{color:'red'}}>Please enter company name</Text>
                :
                <React.Fragment/>
            }

            <Subheading style={{fontWeight: 'bold'}}>ein: XX-XXXXXXX, total 9 digits</Subheading>
            <TextInput
                label='ein: 12-1234567'
                value={props.state.financial.ein}
                onChangeText={ein => props.updateState({ein},'financial')}
                style={styles.inputSpace}
                error = {props.state.error.ein}
                disabled = {true}
            />

            {
                props.state.error.ein === true?
                <Text style={{color:'red'}}>Please enter numbers only in the format of XX-XXXXXXX</Text>
                :
                <React.Fragment/>
            }
           

            <Subheading style={{fontWeight: 'bold'}}>State Code: 2 letter code</Subheading>
            <TextInput
                label='State Code: NC'
                value={props.state.financial.stateCode}
                onChangeText={stateCode => props.updateState({stateCode},'financial')}
                style={styles.inputSpace}
                error = {props.state.error.stateCode}
            />

            {
                props.state.error.stateCode === true?
                <Text style={{color:'red'}}>Please enter 2 letter state code</Text>
                :
                <React.Fragment/>
            }

            <Subheading style={{fontWeight: 'bold'}}>Country: 3 letter code</Subheading>
            <TextInput
                label='Country:USA'
                value={props.state.financial.country}
                onChangeText={country => props.updateState({country},'financial')}
                style={styles.inputSpace}
                error = {props.state.error.country}
            />
            {
                props.state.error.country === true?
                <Text style={{color:'red'}}>Please enter 3 letter country code</Text>
                :
                <React.Fragment/>
            }

            <List.Item
                title={"Are you a driver?"}
                key={"nuts"}
                left={() => (
                    <Checkbox
                        //label="Does any item contain nuts?"
                        status={props.state.financial.isDriver ? 'checked' : 'unchecked'}
                        onPress={() => props.updateState({isDriver:!props.state.financial.isDriver},'financial')}
                    />
                )}
            />
        </React.Fragment>
    )
}

export default Financial