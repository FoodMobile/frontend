import * as React from 'react';
import { Text, TextInput, Paragraph, IconButton, Button, Colors } from 'react-native-paper';
import {getData,storeData} from '../components/asyncStorage'
import { TextInput as ReactNativeTextInput } from 'react-native';
import ScreenNames from '../screenNames'
export default class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
   
  }
  
  state = {
    email:'',
    password:'',
    confirmPassword:''
  }
  
  render() {
    const {
        login,
        createAccount,
        resetPassword
    } = ScreenNames.stackPages

    function resetFields() {
      this.state.email = ''
      this.state.password = ''
      this.state.confirmPassword = ''
    }

    function submitAccount(state,navigation,login) {
      if(state.email == '' || state.password == '' || state.confirmPassword == '') {
        alert('Please enter all fields')
      }
      else {
        if(state.password != state.confirmPassword) {
          alert('Please make sure password and confirm password are same')
        } else {
          alert('Account created')
          navigation.navigate(login.screenName)
        }
      }
    }

    return(
      <>
        <Paragraph>To create an account please enter your email and the password you would like to use.</Paragraph>
       
        <TextInput
          label='Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
          error = {this.state.password != this.state.confirmPassword}
        />

        <TextInput
          label='Confirm Password'
          value={this.state.confirmPassword}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          secureTextEntry={true}
          error = {this.state.password != this.state.confirmPassword}
        />

        <Button 
          compact={true} 
          mode="contained" 
          onPress={() => submitAccount(this.state,this.props.navigation,login)}
          style={{marginTop:20}}
        >
          Create Account
        </Button>

        <Button 
          compact={true} 
          mode="contained" 
          onPress={() => alert('test')}
          style={{marginTop:20}}
          color = {Colors.red400}
        >
          Reset Fields
        </Button>

      </>
      
    )
  }
}
  