import React, { Component } from 'react';
import Login from './Login';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';


export default class SignUp extends Component <{}> {

 constructor(props) {
    super(props);
   this._onLoginTouched = this._onLoginTouched.bind(this);
   this._onBackTouched = this._onBackTouched.bind(this);
   
  }

   _onBackTouched()
   {
       this.props.navigator.pop();
    }

   _onLoginTouched() {
    this.props.navigator.push({
      component: Login,
      title: '',
    });
  }

	render() {
		return (
				    <KeyboardAvoidingView behavior ="padding" style={styles.container}> 
              <Image
               style = {styles.logo}
               source = {require('./Images/logo.png')}
                />
                <Text style={styles.welcome}>
                 </Text>
                 <TouchableOpacity style={styles.topLeftButton} onPress={this._onBackTouched}>
                <Text style={styles.buttonTextAccount}>Back</Text>
                </TouchableOpacity>
                <View>
                  <TextInput
                    placeholder = "Name"
                    placeholderTextColor = '#FFF'
                    returnKeyType = "next"
                     style={styles.input}
                     onSubmitEditing = {() => this.emailInput.focus()}
                   />
                  </View>
                  <TextInput 
                   placeholder = "Email"
                    placeholderTextColor = '#FFF'
                    returnKeyType = "next"
                    keyboardType = "email-address"
                   style={styles.input}
                   ref = {(input) => this.emailInput = input }
                   onSubmitEditing = {() => this.phoneInput.focus()}
                  />

                  <TextInput 
                   placeholder = "Phone No"
                    placeholderTextColor = '#FFF'
                    returnKeyType = "next"
                    keyboardType = "phone-pad"
                   style={styles.input}
                   ref = {(input) => this.phoneInput = input }
                  />

                  <TextInput 
                   placeholder = "Password"
                    placeholderTextColor = '#FFF'
                    returnKeyType = "next"
                   secureTextEntry
                   style={styles.input}
                   onSubmitEditing = {() => this.confirmpasswordInput.focus()}
                  />

                  <TextInput 
                   placeholder = "Confirm Password"
                    placeholderTextColor = '#FFF'
                    returnKeyType = "done"
                   secureTextEntry
                   style={styles.input}
                   ref = {(input) => this.confirmpasswordInput = input }
                   
                  />

                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style= {styles.buttonText}>SIGNUP</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonAccount} onPress={this._onLoginTouched}>
                    <Text style={styles.buttonTextAccount}>Already have an account?</Text>
                </TouchableOpacity>  

               </KeyboardAvoidingView>
            );
	}
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    width: 290
  },
 topLeftButton:
  {
    position: 'absolute',
    left:20,
    top:40,

  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  buttonTextAccount: {
    fontSize: 16,
    color: '#2980b9',
    textAlign: 'center'
},
  buttonAccount: {
    paddingVertical: 15,
    width: 290
  },
  input: {
      height: 40,
      backgroundColor: '#C1F1F1',
      marginBottom: 20,
      borderWidth:0,
      width: 290,
      color : 'white',
      paddingHorizontal: 10
      
  },
  logo: {
    width: 100,
    height: 100
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF'
  },
  welcome: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom:10,
    width: 190,
    opacity: 0.7
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});