import React from 'react';
import { FormLabel, FormInput,Button ,FormValidationMessage} from 'react-native-elements';
import {View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Verify extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     verified_code: ''
    };
 }

 _verify(){
   Actions.verify();
 }

  render(){
    return(
      <View>
      <FormLabel>Name</FormLabel>
      <FormInput onChangeText={()=>_verify}/>
      <FormValidationMessage>Error message</FormValidationMessage>
      <Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='Verify' />
      </View>
    );
  }

}
export default Verify;

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
