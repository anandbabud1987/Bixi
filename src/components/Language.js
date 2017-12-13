import React from 'react';
import {View,Text,Picker,Item} from 'react-native';


import {Actions} from 'react-native-router-flux';
import I18n from 'react-native-i18n';




class Language extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     language: ''
    };
 }

 setLanguage(val){
   I18n.defaultLocale=val;
   Actions.login();
 }

render () {
  return (
    <View>
    <Picker
  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setLanguage(itemValue)}>
  <Picker.Item label="" value="en" />
  <Picker.Item label="Tamil" value="ta" />
  <Picker.Item label="English" value="en" />
  <Picker.Item label="French" value="fr" />
</Picker>
</View>
  )
}
}
export default Language;
