import * as React from 'react';
import { Text, TextInput, Paragraph, IconButton, Button, Colors } from 'react-native-paper';
import {getData,storeData} from '../components/asyncStorage'
import { TextInput as ReactNativeTextInput } from 'react-native';
import ScreenNames from '../screenNames'

const emailMatcher = /(\S+?)@\S+\.(\S+)/;

import PreferencesContext from '../context/context'

export default class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
  }
  
  state = {
    email:'',
    userName:'',
    name:'',
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
      this.state.email = '' //4 charceters, x@x.x
      this.state.userName = '' //4 charceters
      this.state.name = '' //4 charceters
      this.state.password = '' //4 charceters
      this.state.confirmPassword = '' //4 charceters
    }

    function submitAccount(state,navigation,login,context) {
      if(state.email == '' || state.name == ''|| state.userName == '' || state.password == '' || state.confirmPassword == '') {
        alert('Please enter all fields')
      }
      else {
        if(state.password != state.confirmPassword) {
          alert('Please make sure password and confirm password are same')
        } else {

          if(emailMatcher.test(state.email)) {
              const formData = new FormData();

              formData.append('name', state.name)
              formData.append('username', state.userName)
              formData.append('email', state.email)
              formData.append('password', state.password)

              fetch(`${context.ip}${context.endpoints.createAccount}`, {
                method: 'POST',
                body: formData,
              })
             
              // fetch(`${context.ip}${context.endpoints.test}/a`, {
              //   method: 'GET',
              // })
              fetch(`${context.ip}${context.endpoints.createAccount}`, {
                method: 'POST',
                body: formData,
              })
              .then((response) => response.json())
              .then((result) => {
                if(result.status > 399) {
                  alert('Error '+ result.status)
                } else {
                  //console.log(result)
                  alert(`${result.success ? 'User created' :result.errorMessage}` );
                }
              })
              .catch((error) => {
                alert('Error:', error);
              });


             //navigation.navigate(login.screenName)
          } else {
            alert("Please enter a valid email")
          }
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
          label='Username'
          value={this.state.userName}
          onChangeText={userName => this.setState({ userName })}
        />

        <TextInput
          label='Name'
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
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
          onPress={() => submitAccount(this.state,this.props.navigation,login,this.context)}
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
  
CreateAccount.contextType = PreferencesContext;