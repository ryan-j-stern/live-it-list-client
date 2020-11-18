import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  commentSectionContainer: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    width: Dimensions.get('screen').width * 0.85,
    top: -3,
    paddingTop: 6,
  },
});

export default styles;
