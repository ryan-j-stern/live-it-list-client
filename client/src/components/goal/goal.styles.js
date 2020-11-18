import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
  type: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
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
  },
  comment: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
});

export default styles;
