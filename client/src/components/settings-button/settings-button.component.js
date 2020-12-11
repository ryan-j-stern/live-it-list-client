import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

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
      <Text style={styles.text}>Settings</Text>
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

const styles = StyleSheet.create({
  settingsButton: {
    position: 'absolute',
  },
  settingsModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    bottom: -105,
    backgroundColor: '#edeef0',
    height: 175,
    width: 135,
    marginRight: 5,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
  },
  text: {
    fontSize: 18,
  },
});

export default SettingsButton;
