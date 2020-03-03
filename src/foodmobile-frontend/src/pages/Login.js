import * as React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, IconButton, Colors   } from 'react-native-paper';

import PreferencesContext from '../context/context'
import ScreenNames from '../screenNames'

export default function LoginPage({ navigation }) {
    // const {login} =  ScreenNames.stackPages

    //Get the signin method default with the context value
    //And see if its been changed in Main.js
    const {signIn} = React.useContext(
        PreferencesContext
    );
    
    const [inputError,updateError] = React.useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'usernameError':
              return {
                ...prevState,
                userNameError: action.value,
              
              };
          case 'passwordError':
              return {
                  ...prevState,
                  passwordError: action.value,
              
              };
        }
      },
      {
        userNameError: false,
        passwordError: false,
      }
    )
    const [userNamePasswordValues, updateLoginValues] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'ADD_USERNAME':
                return {
                ...prevState,
                userName: action.value,
                
                };
            case 'ADD_PASSWORD':
                return {
                    ...prevState,
                    password: action.value,
                
                };
          }
        },
        {
          userName: null,
          password: null,
        }
    );

    function handleSignin() {
      const {userName,password}=userNamePasswordValues
      const {userNameError,passwordError}=inputError
      if(userName && password) {
        signIn({
          userName:userNamePasswordValues.userName,
          password:userNamePasswordValues.password
        })
      }
      else {
        
        if(!userName){
          updateError({
            type:'usernameError',
            value:true
          })
        }

        if(!password){
          updateError({
            type:'passwordError',
            value:true
          })
        }
      }
    }

    return (
      <>  
          <TextInput
            label='Username'
            value={userNamePasswordValues.userName}
            onChangeText={
              text => {
                  updateLoginValues({
                  type:'ADD_USERNAME',
                  value:text
                })
                updateError({
                  type:'usernameError',
                  value:false
                })
              }
            }
            error={inputError.userNameError}
            // underlineColor='#FF0000'
          />
          <TextInput
            label='Password'
            value={userNamePasswordValues.password}
            onChangeText={
              text => {
                  updateLoginValues({
                  type:'ADD_PASSWORD',
                  value:text
                })
                updateError({
                  type:'passwordError',
                  value:false
                })
              }
            }
            error={inputError.passwordError}
          />
          <Button 
              onPress={
                  ()=>{
                    handleSignin()
                  }
              }
              mode="contained"
          >
              <Text>Login</Text>
          </Button>

          <IconButton
            icon="camera"
            color={Colors.red500}
            size={40}
            onPress={() => console.log('Pressed')}
          />
          
          <Text>{userNamePasswordValues.userName}</Text>
          <Text>{userNamePasswordValues.password}</Text>

          <Text>{inputError.userName}</Text>
          <Text>{inputError.password}</Text>
      </>
    
    );
}
  