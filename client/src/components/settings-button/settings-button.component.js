import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import styles from './settings-button.styles';

const SettingsButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View style={styles.settingsButton}>
        <Button title="Settings" onPress={() => setShowModal(!showModal)} />
      </View>
      {showModal ? <SettingsModal /> : null}
    </>
  );
};

const SettingsModal = () => (
  <View style={styles.settingsModal}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Edit Profile</Text>
    </View>
    <View
      style={[
        styles.textContainer,
        {borderTopColor: 'black', borderTopWidth: StyleSheet.hairlineWidth},
      ]}>
      <Text style={styles.text}>Color Scheme</Text>
    </View>
    <View
      style={[
        styles.textContainer,
        {borderTopColor: 'black', borderTopWidth: StyleSheet.hairlineWidth},
      ]}>
      <Text style={[styles.text, {color: 'red'}]}>Logout</Text>
    </View>
  </View>
);

export default SettingsButton;
