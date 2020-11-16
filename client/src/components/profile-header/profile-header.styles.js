import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageContainer: {
    display: 'flex',
    flex: 1,
  },
  userInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 2,
    borderTopColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightColor: 'white',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'white',
    borderLeftWidth: StyleSheet.hairlineWidth,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    bottom: -38,
  },
  displayName: {
    fontSize: 35,
    fontWeight: '400',
  },
  userHandle: {
    fontSize: 15,
  },
  userBio: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    bottom: -23,
  },
  userDataContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    bottom: -10,
  },
  userData: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 20,
    fontWeight: '500',
  },
  category: {
    fontSize: 15,
    fontWeight: '300',
  },
});

export default styles;
