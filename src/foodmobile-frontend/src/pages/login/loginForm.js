import * as React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, IconButton, Colors   } from 'react-native-paper';

import PreferencesContext from '../../context/context'
import ScreenNames from '../../screenNames'
import {getData,storeData} from '../../components/asyncStorage'

export default function LoginForm(props) {
    const {
        login,
        createAccount,
        resetPassword
    } = ScreenNames.stackPages

    //Get the signin method default with the context value
    //And see if its been changed in Main.js
    const { navigation } = props
    //console.log(Object.keys(props),'aaaa')
    const {signIn,userState} = React.useContext(
        PreferencesContext
    );
    
    //keeps track of error
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

    //Stores username and password
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
    
    //What to do when clicking logging
    function handleSignin() {
      const {userName,password}=userNamePasswordValues
      const {userNameError,passwordError}=inputError
      if(userName && password) {
        signIn({
          userName:userNamePasswordValues.userName,
          password:userNamePasswordValues.password
        })
        //console.log(userState,'----------')
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

          {/* <IconButton
            icon="camera"
            color={Colors.red500}
            size={40}
            onPress={() => console.log('Pressed')}
          /> */}

          <Button 
            compact={true} 
            mode="text " 
            onPress={() => navigation.navigate(createAccount.screenName)}
            style={{marginTop:20}}
          >
           Create Account
          </Button>

          <Button 
            compact={false} 
            mode="text " 
            onPress={() => navigation.navigate(resetPassword.screenName)}
            style={{marginTop:20}}
          >
           Forgot Password
          </Button>
      </>
    
    );
   
}