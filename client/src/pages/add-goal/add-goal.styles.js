import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  addGoal: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#bac7cd',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  logo: {
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 1,
    height: 55,
    width: 55,
  },
  input: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    height: Dimensions.get('screen').height * 0.15,
    width: Dimensions.get('screen').width * 0.9,
    padding: 10,
    paddingTop: 10,
    fontSize: 23,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  quoteContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    padding: Dimensions.get('screen').width * 0.1,
  },
  quote: {
    fontSize: 22,
  },
  author: {
    fontSize: 20,
    marginLeft: 'auto',
  },
  buttons: {
    marginBottom: 15,
  },
});

export default styles;
