import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  progress: {
    display: 'flex',
    height: Dimensions.get('screen').width * 0.85,
    width: Dimensions.get('screen').width * 0.8,
    alignSelf: 'center',
    marginBottom: 15,
    padding: 3,
  },
  backgroundImage: {
    flex: 5,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  caption: {
    color: 'black',
  },
  date: {
    fontWeight: '700',
  },
  captionContainer: {
    flex: 1,
    position: 'relative',
    padding: 5,
    marginHorizontal: 5,
    width: '100%',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
