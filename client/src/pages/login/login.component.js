import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {connect} from 'react-redux';
import {facebookLogin} from '../../redux/user/user.actions';

import {onFacebookButtonPress} from './login.utils';

import LoginButton from '../../components/login-button/login-button.component';

import styles from './login.styles';

const LoginPage = ({facebookLogin, navigation}) => {
  handleFacebookLogin = async () => {
    const returnedUser = await onFacebookButtonPress();
    const additionUserInfo = returnedUser.additionalUserInfo.profile;
    const user = returnedUser.user;
    console.log(additionUserInfo.picture);

    const userData = {
      email: additionUserInfo.email,
      firstName: additionUserInfo.first_name,
      lastName: additionUserInfo.last_name,
      displayName: user.displayName,
      provider: additionUserInfo.providerId,
      facebookId: additionUserInfo.id,
      photoUrl: additionUserInfo.picture.data.url,
    };

    facebookLogin(userData);
    navigation.push('bottom-tabs');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleAndMottoContainer}>
        <Text style={styles.title}>LiveItList</Text>
        <Text style={styles.motto}>Life is short. Live it.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <LoginButton handlePress={() => navigation.push('bottom-tabs')} />
        <LoginButton facebook handlePress={handleFacebookLogin} />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  facebookLogin: user => dispatch(facebookLogin(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
