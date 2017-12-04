import React from 'react';
import {Text,View,TextInput,Button,Picker} from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';


class Settings extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
     language: ''
    };
 }

 _changeLanguage(localeId){
    //App.defaultLocale=localeId
 }
  render(){
    return(
      <View>

      <Picker
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Tamil" value="ta" />
<     /Picker>
      </View>
    );
  }


}
export default Settings;
