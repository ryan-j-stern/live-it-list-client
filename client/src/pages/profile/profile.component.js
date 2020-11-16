import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import TopTabs from '../../components/navigation/top-tabs.component';
import ProfileHeader from '../../components/profile-header/profile-header.component';

const ProfilePage = ({navigation}) => (
  <ScrollView>
    <ProfileHeader />
    <TopTabs />
  </ScrollView>
);

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    display: 'flex',
    flex: 1,
  },
  userInfo: {
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
    // borderColor: 'black',
    // borderWidth: 1,
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 1,
    bottom: -38,
  },
  displayName: {
    fontSize: 35,
    fontWeight: '400',
  },
  userHandle: {
    fontSize: 15,
  },
  userDataContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    // borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    width: '100%',
    // top: -10,
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

export default ProfilePage;
