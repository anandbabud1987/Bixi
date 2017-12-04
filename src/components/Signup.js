import React from 'react';
import {Text,TextInput,View,StyleSheet,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Signup extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     telephone: ''
    };
 }

 _sendCode(){
   Actions.verify();
 }

  render(){
    return(
      <View>
      <TextInput
        style={{height: 80, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(telephone) => this.setState({telephone})}
        multiline={false}
        placeholder="Phone Number"
        value={this.state.telephone}
      />
      <Button
      onPress={() => this._sendCode(this)}
        title="Send Verification Code"
        color="#841584"
        accessibilityLabel="Send Verification Code"
      />
      </View>
    );
  }

}
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title:{
    textAlign:'center',
    marginBottom:5,
    color:'#DAF7A6'
  }
});
