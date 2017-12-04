

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';


import Footer from './src/components/Footer';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Settings from './src/components/Settings';
import Register from './src/components/Register';
import Signup from './src/components/Signup';
import Verify from './src/components/Verify';
import I18n from 'react-native-i18n';
import en from './src/i18n/en';
import fr from './src/i18n/fr';
import ta from './src/i18n/ta';

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
  fr,
  ta
}

class App extends Component<{}> {
  render() {
    var defaultLocale='en';

    return (

      <Router>
      <Stack key="root">
        <Scene key="login" style={styles.title} component={Login} initial={true} title={I18n.t('login', {locale: defaultLocale})}/>
        <Scene key="register" style={styles.title} component={Register} title={I18n.t('register')}/>
        <Scene key="home" style={styles.title} component={Home} title={I18n.t('home')}/>
        <Scene key="settings" style={styles.title} component={Settings} title={I18n.t('settings')}/>
        <Scene key="signup" style={styles.title} component={Signup} title={I18n.t('signup')}/>
        <Scene key="verify" style={styles.title} component={Verify} title={I18n.t('signup')}/>
      </Stack>
    </Router>

    );
  }
}
export default App;

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
    marginBottom:10,
    color:'#DAF7A6'
  }
});
