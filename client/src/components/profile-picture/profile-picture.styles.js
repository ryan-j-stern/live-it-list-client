import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  large: {
    display: 'flex',
    height: 95,
    width: 95,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    top: -45,
    zIndex: 5,
    position: 'absolute',
  },
  small: {
    display: 'flex',
    height: 45,
    width: 45,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
  },
  xSmall: {
    display: 'flex',
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
