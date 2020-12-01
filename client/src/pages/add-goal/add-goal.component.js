import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

import CustomButton from '../../components/custom-button/custom-button.component';

const AddGoal = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          numberOfLines={8}
          style={styles.input}
          placeholder="What is your goal?"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flex: 3,
          padding: 15,
          justifyContent: 'center',
          backgroundColor: 'grey',
          height: '100%',
          width: '80%',
        }}>
        <Text>Some motivational quote about goals</Text>
        <Text style={{display: 'flex', alignSelf: 'flex-end'}}>
          - Ryan Stern
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton handlePress={() => navigation.goBack()}>
          Cancel
        </CustomButton>
        <CustomButton handlePress={() => navigation.goBack()}>
          Submit
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 25,
    backgroundColor: 'grey',
  },
  inputContainer: {
    display: 'flex',
    flex: 2,
    padding: 15,
    borderBottomRightRadius: 52,
    borderBottomLeftRadius: 52,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'grey',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightColor: 'grey',
    borderRightWidth: StyleSheet.hairlineWidth,
    width: '100%',
    marginTop: '5%',
    backgroundColor: 'white',
  },
  input: {
    // paddingVertical: 30,
    marginTop: 15,
    fontSize: 18,
  },
});

export default AddGoal;
