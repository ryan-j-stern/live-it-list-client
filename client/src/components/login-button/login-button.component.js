import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';

import facebookLogo from '../../assets/images/facebook_logo.png';
import googleLogo from '../../assets/images/google_logo.png';

import styles from './login-button.styles';

const LoginButton = ({facebook}) => (
  <TouchableOpacity
    style={[
      styles.loginButton,
      facebook ? styles.loginButtonFacebook : styles.loginButtonGoogle,
    ]}>
    <Image
      source={facebook ? facebookLogo : googleLogo}
      style={
        facebook
          ? {height: 35, width: 35, left: -3}
          : {height: 53, width: 53, justifyContent: 'flex-start', left: -3}
      }
    />
    <Text style={facebook ? styles.text : [styles.text, styles.textGoogle]}>
      {facebook ? 'Login with Facebook' : 'Sign in with Google'}
    </Text>
  </TouchableOpacity>
);

export default LoginButton;
