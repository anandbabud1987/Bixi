import React from 'react';
import {Text,View,TextInput,Picker} from 'react-native';
import { FormLabel, FormInput,Button ,FormValidationMessage,Divider} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';


class Login extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
     username: '',
     password:''
    };
 }
 _login(){
   console.log(this.username);
   console.log(this.password);
   Actions.home();
 }

 _signup(){
   Actions.signup();
 }
 _changeLanguage(localeId){

 }
  render(){
    return(
      <View>
       <Divider style={{ height: "14%" }} />
           <FormInput onChangeText={(username) =>
           this.setState({username})}
           value={this.state.username}
           placeholder="Email or Phone number"/>
           <FormValidationMessage>Please enter your email or phone number</FormValidationMessage>
           <Divider style={{ height: "7%" }} />
           <FormInput onChangeText={(password) =>
           this.setState({password})} secureTextEntry={true}
           multiline={false}
           placeholder="Password"
           value={this.state.password}
           />
           <FormValidationMessage>Please enter Password</FormValidationMessage>
           <Divider style={{ height: "7%" }} />
           <Button
              large
              icon={{name: 'sign-in', type: 'font-awesome'}}
              onPress={() => this._login(this)}
              title='Sign-In'
              backgroundColor="green"
              raised
              borderRadius={7}
              accessibilityLabel="Sign-In"/>

           <Divider style={{ height: "7%" }} />
           <Button
              onPress={() => this._signup(this)}
           title="Signup"
           large
           icon={{name: 'user-plus', type: 'font-awesome'}}
           backgroundColor="green"
           raised
           borderRadius={7}
           accessibilityLabel="Signup"
           />
        </View>
    );
  }


}
export default Login;
