import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
  },
  goalContainer: {
    justifyContent: 'flex-start',
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.92,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  textContainer: {
    display: 'flex',
    marginVertical: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
  },
  type: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
});

export default styles;
