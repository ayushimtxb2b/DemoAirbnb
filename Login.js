import React, { Component } from 'react';
import SignUp from './SignUp';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView

} from 'react-native';

var NextPage = require('./SignUp.js');
export default class Login extends Component  {

  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this._onBackTouched = this._onBackTouched.bind(this);
    this._onForgotPassowrdTouched = this._onForgotPassowrdTouched.bind(this);
   
  }

  _onBackTouched()
   {
       this.props.navigator.pop();
    }

    _onForgotPassowrdTouched() {
      /*this.props.navigator.push({
      component: ForgotPassword,
      title: 'ForgotPassword',
      passProps: {index: nextIndex}
      });*/
    }

	render() {
    
		return (
				<KeyboardAvoidingView behavior ="padding" style={styles.container}> 
          <TouchableOpacity style={styles.topRightButton} onPress={this._onForgotPassowrdTouched}>
              <Text style= {styles.buttonTextAccount}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topLeftButton} onPress={this._onBackTouched}>
              <Image
              style = {styles.loginBackIcon}
              source = {require('./Images/left_arrow.png')}
            />
            </TouchableOpacity>
            <Text style={styles.welcome}>
              LOGIN
            </Text>
            <View>
            <Text style={styles.inputLabel}>
                EMAIL ADDRESS
            </Text>
            <TextInput
            keyboardType = "email-address"
            returnKeyType = "next"
            style={styles.input}
            onSubmitEditing = {() => this.passwordInput.focus()}
            />
            <View style={styles.bottomLine}></View>
             </View>
             <View>
             <Text style={styles.inputLabel}>
                PASSWORD
            </Text>
            <TextInput
            secureTextEntry
            returnKeyType = "done"
            style={styles.input}
            ref = {(input) => this.passwordInput = input }
            />
            <View style={styles.bottomLine}></View>
            </View>

            <TouchableOpacity style={styles.loginButtonContainer}>
              <Image
            style = {styles.loginButtonIcon}
            source = {require('./Images/bluearrow.png')}
            />
            </TouchableOpacity> 
            </KeyboardAvoidingView>
            );
	}
}

const styles = StyleSheet.create({
  topLeftButton:
  {
    position: 'absolute',
    left:20,
    top:40,

  },
  topRightButton:
  {
    position: 'absolute',
    right:20,
    top:40,

  },
  loginButtonContainer: {
     width: 50,
    height: 50,
    bottom:10,
    right:10,
    position: 'absolute'
  },
 loginButtonIcon: {
    width: 50,
    height: 50
 },
 loginBackIcon: {
    width: 20,
    height: 20,
    tintColor : 'white'
 },
 inputLabel: {
    textAlign: 'left',
    marginTop: 10,
    width: 280,
    marginBottom: 0,
    color: 'white'
  },
  bottomLine: {
    height: 1,
    width: 280,
    backgroundColor: '#2D7F8C'
  },
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 10,
    paddingHorizontal: 10,
    width: 280,
    marginTop: 10,
    marginBottom: 10,
    height: 46
	},

	buttonText: {
		fontSize: 20,
    color: 'white',
    textAlign: 'center'
	},
   buttonTextAccount: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
},
  buttonAccount: {
    paddingVertical: 15,
    width: 290
  },
  input: {
      height: 40,
      marginBottom: 0,
      borderWidth:0,
      width: 280,
      color : 'white',
      paddingHorizontal: 0
      
  },
  container: {
  	padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#026D7E'
  },
  welcome: {
    textAlign: 'left',
    marginTop: 10,
    width: 280,
    fontSize: 17,
    marginBottom: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});