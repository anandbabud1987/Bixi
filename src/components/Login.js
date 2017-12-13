import React from 'react';
import {Text,View,TextInput,Picker,TouchableHighlight,StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,Toast } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import Dimensions from 'Dimensions';
import NetworkService from '../service/NetworkService';


class Login extends React.Component{
_signin(){
    if(this.state.username==='' || this.state.password===''){
              Toast.show({
                          text: 'Username or Password is empty!',
                          position: 'bottom',
                          buttonText: 'Okay'
                        });
                return;
    }

      NetworkService.doLogin(this.state)
        .then(data => {
          if(data.loginSuccess){
              Actions.home();
          }
          else{
            alert("Username or Password is incorrect");
          }

        })


}

_goToLang(){
  Actions.language();
}

  constructor(props) {
   super(props);
   this.state = {
     username: '',
     password:'',
     userdetail:[]
    };
 }

 _getUser(){
    NetworkService.getUser()
      .then(data => {
        console.log('Data:', data)
        this.setState({
          username: data.username,
          password:data.password
        })
      })
  }

  componentDidMount(){
     this._getUser();

     console.log(this.state.userdetail.username);
  }


  render(){


    return(

      <Container>

         <Content>
           <Form>
             <Item floatingLabel>
               <Label >{I18n.t('username',{locale: I18n.defaultLocale})}</Label>
               <Input  value={this.state.username} onChangeText={(username) => this.setState({username})}/>
             </Item>
             <Item floatingLabel>
               <Label>{I18n.t('password',{locale: I18n.defaultLocale})}</Label>
               <Input value={this.state.password} secureTextEntry={true}  onChangeText={(password) => this.setState({password})}/>
             </Item>

           </Form>
           <Content padder>
           <Text/>
           <Button block style={styles.button}
           onPress={() => this._signin(this)}
           >
           <Icon name='sign-in' size={30} color="white"/>

           <Text style={styles.text}>{I18n.t('login',{locale: I18n.defaultLocale})}</Text>
           </Button>
           <Text/>
           <Button block style={styles.button}
           onPress={() => this._goToLang(this)}
           >
           <Icon name='language'  size={30} color="white"/>
            <Text style={styles.text}>{I18n.t('language',{locale: I18n.defaultLocale})}</Text>
           </Button>
           </Content>
         </Content>
       </Container>
    );
  }

}

export default Login;
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title:{
    textAlign:'center',
    marginBottom:10,
    color:'#DAF7A6'
  },
  text:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    marginLeft:10
  },
  label:{
    color:'gray',
    fontSize:20
  },
  button:{
    backgroundColor:'green',
		height: 50,
    borderRadius:10
  }
});
