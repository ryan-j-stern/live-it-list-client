import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  makeProgress: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoPlaceholder: {
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    height: 55,
    width: 55,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.9,
    padding: 5,
  },
  text: {
    color: 'white',
  },
  imageButtonContainer: {display: 'flex', justifyContent: 'center'},
  selectedImage: {
    height: 200,
    width: 200,
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
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
  buttons: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'center',
  },
});

export default styles;
