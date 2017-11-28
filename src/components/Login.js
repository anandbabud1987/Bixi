import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
     username: 'Username or Email',
     password:'Password'
    };
 }
 _login(){
   Actions.home();
 }
  render(){
    return(
      <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        multiline={false}
        value={this.state.username}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        multiline={false}
        value={this.state.password}
        secureTextEntry={true}
      />
      <Button
      onPress={() => this._login()}
        title="Login"
        color="#841584"
        accessibilityLabel="Login"
      />
      </View>
    );
  }


}
export default Login;
