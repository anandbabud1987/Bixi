import React from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';
import { FormLabel, FormInput,Button ,FormValidationMessage,Divider} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import CommonConstants from '../store/CommonConstants';
const commonConstants=CommonConstants;

class Signup extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     username: '',
     password:'',
     first_name:'',
     last_name:'',
    email:'',
    country_cd:commonConstants.COUNTRY_CD,
    phone_number:''

    };
 }

 _sendCode(){
   Actions.verify();
 }

  render(){
    return(
      <View>


            <Divider style={{ height: "7%" }} />
             <FormLabel>{I18n.t('first_name',{locale: I18n.defaultLocale})}</FormLabel>
           <FormInput onChangeText={(first_name) =>
           this.setState({first_name})}
           value={this.state.first_name}
        />

           <Divider style={{ height: "7%" }} />
            <FormLabel>{I18n.t('last_name',{locale: I18n.defaultLocale})}</FormLabel>
           <FormInput onChangeText={(last_name) =>
           this.setState({last_name})}
           value={this.state.last_name}
          />

           <Divider style={{ height: "7%" }} />
           <FormLabel>{I18n.t('mobile_no',{locale: I18n.defaultLocale})}</FormLabel>
           <View style={{flex: 1, flexDirection: 'row'}}>
           <FormInput onChangeText={(country_cd) =>
           this.setState({country_cd})}
           value={this.state.country_cd}
          />
               <Divider style={{ height: "7%" }} />
           <FormInput onChangeText={(phone_number) =>
           this.setState({phone_number})}
           value={this.state.phone_number}
        />
           </View>
           <Divider style={{ height: "7%" }} />


           <Button
              onPress={() => this._signup(this)}
           title="Signup"
           large
           icon={{name: 'user-plus', type: 'font-awesome'}}
           backgroundColor="green"
           raised
           borderRadius={7}

           />
        </View>
    );
  }

}
export default Signup;
