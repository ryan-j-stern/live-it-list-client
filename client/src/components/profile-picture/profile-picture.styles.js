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
    height: 30,
    width: 30,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    top: -45,
    zIndex: 5,
    position: 'absolute',
  },
});

export default styles;
