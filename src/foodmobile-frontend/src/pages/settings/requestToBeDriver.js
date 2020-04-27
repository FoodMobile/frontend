import * as React from 'react';
import { Button,Text,Paragraph, Dialog, Portal, List } from 'react-native-paper';
import PreferencesContext from '../../context/context'
import { StyleSheet} from "react-native";
import axios from 'axios'
import { View } from 'react-native';

import screenNames from '../../screenNames'

export default class RequestToBeDriver extends React.Component {

    state = {
        visible: false,
      };
    
    _showDialog = () => this.setState({ visible: true });
    
    _hideDialog = () => this.setState({ visible: false });

    submitRequestToBeDriver = () => {
        //alert((screenNames.stackPages.findFoodTruckCompany.screenName))     
        this._hideDialog()  
        this.props.navigation.navigate(screenNames.stackPages.findFoodTruckCompany.screenName)
        // let payload = new URLSearchParams();
        // payload.append("username",username)
    
        // console.log('SENDING USERNAME = ',username)
        // const response = await axios.post(`${this.context.ip}${this.context.endpoints.userInfo}`, payload)
    }
    
    render() {
        let state = this
        const {
            findFoodTruckCompany
        } = screenNames
        return (
            <React.Fragment>
                {/* <Button mode="contained" onPress={this._showDialog} style={this.props.styles.button}>
                   <Text>Request to be driver</Text>
                </Button> */}
                <List.Item
                    title="Request to be driver"
                    description="If you are a driver of a food truck company"
                    onPress={this._showDialog}
                    right={
                        props =>  
                        <View style={styles.preference}/>
                    }
                />
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                    <Dialog.Title>Become a driver</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                            If you are a driver of a food truck, click yes to submit a request to become a driver
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions >
                       
                        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Button color = "#ff0000" onPress={this._hideDialog}>Cancel</Button>
                            <Button color = "#00aa00" onPress={this.submitRequestToBeDriver}>Yes</Button>
                        </View>
                    </Dialog.Actions>
                    </Dialog>
                </Portal>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
})

RequestToBeDriver.contextType = PreferencesContext;