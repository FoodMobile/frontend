import * as React from 'react';
import { Text, TextInput, Paragraph, IconButton, Button, Colors } from 'react-native-paper';
import {getData,storeData} from '../components/asyncStorage'
import ScreenNames from '../screenNames'

async function getTokie() {
  return await getData('token')
}
export default class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
   
  }

  state = {
    email:''
  }

  render() {
    const {
        login,
        createAccount,
        resetPassword
    } = ScreenNames.stackPages
    function sendEmail(state,navigation,login) {
      if(state.email == '') {
        alert('Please enter a email')
      } else {
        alert('Email sent')
        navigation.navigate(login.screenName)
      }
    }
    return (
      <>
        <Paragraph>Please enter your email you used to create account. You will then receive instructions on what to do next.</Paragraph>
        <TextInput
          label='Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <Button 
          compact={true} 
          mode="contained" 
          onPress={() => sendEmail(this.state,this.props.navigation,login)}
          style={{marginTop:20}}
        >
          Send email
        </Button>
      </>
    
    )
  }
}
  