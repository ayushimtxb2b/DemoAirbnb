import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import SignUp from './SignUp';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  Button,
  Image
} from 'react-native';


export default class Splash extends Component <{}> {

	render() {
		return (
				<NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '',
          passProps: {index: 1}
        }}
        style={{flex: 1}}
        navigationBarHidden={true}
      />
            );
	}
}

class MyScene extends Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onLoginTouched = this._onLoginTouched.bind(this);
    this._onSIgnUpTOuched = this._onSIgnUpTOuched.bind(this);
  }

  _onLoginTouched() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Login,
      title: 'Login Page',
      passProps: {index: nextIndex}
    });
  }

  _onSIgnUpTOuched() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: SignUp,
      title: 'SignUp Page',
      passProps: {index: nextIndex}
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.topButton}  onPress={this._onLoginTouched}>
            <Text style={styles.topButtonText}>Log In</Text>
          </TouchableOpacity>
         <View style={styles.logoContiner}>
      		<Image
      			style = {styles.logo}
      			source = {require('./Images/logo.png')}
      			/>
            </View>
            <Text style={styles.welcome}>
                 Welcome to Mtx!
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAccountContainer} onPress={this._onSIgnUpTOuched}>
                <Text style={styles.buttonAccountText}>Create Account</Text>
            </TouchableOpacity> 

            <Text style={styles.welcome}>
                 More options
            </Text>   
            <Text style={styles.cotiuneAccount}>
                By tapping Continue,Create Account or more options,I agree to Mtx's Terms of service,Payments Terms of Service and Privacy Policy.
            </Text> 
            </View>
    );
  }
}

const styles = StyleSheet.create({
  topButton:
  {
    position: 'absolute',
    right:20,
    top:40,

  },
  topButtonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  logoContiner:{
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row'
  },
	logo: {
		width: 100,
		height: 100,
    tintColor: 'white'
	},
	
  textMargin: {
    marginTop: 20,
    marginBottom: 20
  },
	
	buttonContainer: {
		backgroundColor: '#F4F7FB',
    paddingVertical: 10,
    width: 280,
    marginBottom: 20,
    borderWidth: 1,
    borderColor : 'white',
    height:40,
    borderRadius: 10
	},
	buttonText: {
		fontSize: 15,
    color: '#125061',
    textAlign: 'center',
	},

  buttonAccountContainer:{
    paddingVertical: 10,
    width: 280,
    marginBottom: 20,
    height:40,
    borderWidth: 1,
    borderColor : 'white',
    borderRadius: 10
  },

  buttonAccountText:{
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  container: {
  	padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#026D7E',
  },
  welcome: {
    fontSize: 17,
    textAlign: 'left',
    marginTop: 10,
    width: 280,
    marginBottom: 10,
    color: 'white'
  },
  cotiuneAccount:{
    fontSize: 11,
    textAlign: 'left',
    marginTop: 10,
    width: 280,
    marginBottom: 10,
    color: 'white'
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});