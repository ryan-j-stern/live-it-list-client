import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
  loginButtonFacebook: {
    borderColor: '#1877F2',
    backgroundColor: '#1877F2',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  loginButtonGoogle: {
    backgroundColor: '#4285F4',
    borderColor: '#4285F4',
    // Alternate Google styling:
    // backgroundColor: 'white',
    // borderColor: 'white',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  textGoogle: {
    marginLeft: 8,
    // color: 'grey',
  },
});

export default styles;
