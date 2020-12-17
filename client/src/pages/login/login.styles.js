import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAndMottoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    padding: 20,
  },
  title: {
    fontSize: 75,
  },
  motto: {
    fontSize: 20,
    marginTop: 15,
  },
  buttonContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    // borderColor: 'black',
    // borderWidth: 1,
  },
});

export default styles;
