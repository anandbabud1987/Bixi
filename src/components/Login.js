import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';
import Actions from 'react-native-router-flux';

class Login extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
     username: 'Username or Email address',
     password:'Password',
     loginbtn:'Login'
    };
 }
  render(){
    return(
      <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
      />
      <Button
        onPress={Actions.home(PARAMS)}
        title={this.state.loginbtn}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }

}
export default Login;
