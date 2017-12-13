import React from 'react';
import {Text,View} from 'react-native';

class Register extends React.Component{
  render(){
    const { params } = this.props.navigation.state;
    return(
      <View>
        <Text>Register{params.username}</Text>
      </View>
    );
  }

}
export default Register;
