import * as React from 'react';
import { Text} from 'react-native-paper';
import {getData,storeData} from '../components/asyncStorage'

import LoginForm from './login/loginForm'

async function getTokie() {
  return await getData('token')
}
export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: true,
      test_token: null
    };
  }

  componentDidMount() {
    this._asyncRequest = getTokie().then(
      externalData => {
        this._asyncRequest = null;
        this.setState({
          isLoading:false,
          test_token: externalData
        });
      }
    );
  }

  render() {
    if (this.state.isLoading === true) {
      return (<Text> Loading..... </Text>);
    } else {
      return( <LoginForm testData = {this.state.test_token}/>)
    }
  }
}
  