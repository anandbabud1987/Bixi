

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import I18n from 'react-native-i18n';
import en from './src/i18n/en';
import fr from './src/i18n/fr';

import { getLanguages } from 'react-native-i18n';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
getLanguages().then(languages => {
  console.log(languages) // ['en-US', 'en']
})
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
  en,
  fr
}

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="login" style={styles.title} component={Login} initial={true} title={I18n.t('login')}/>
        <Scene key="register" style={styles.title} component={Register} title={I18n.t('register')}/>
        <Scene key="home" style={styles.title} component={Home} title={I18n.t('home')}/>
      </Stack>
    </Router>
    );
  }
}
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
