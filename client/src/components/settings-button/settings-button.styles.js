import {StyleSheet} from 'react-native';

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

export default styles;
