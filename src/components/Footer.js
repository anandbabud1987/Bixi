import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
   super(props);
   this.state = {
     language:'en'
    };
 }
  render() {
    return (
      <View>
      <Picker
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Tamil" value="ta" />
        </Picker>
      </View>
    );
  }
}
