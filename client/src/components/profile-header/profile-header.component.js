import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import ProfilePicture from '../profile-picture/profile-picture.component';

import profile from '../../assets/images/profile.jpg';
import headerBkg from '../../assets/images/canyons.jpg';

import styles from './profile-header.styles';

const ProfileHeader = () => (
  <View style={styles.profile}>
    <View style={styles.backgroundImageContainer}>
      <Image
        source={headerBkg}
        style={{
          width: Dimensions.get('screen').width,
          height: 200,
          zIndex: -5,
        }}
      />
    </View>
    <View style={styles.userInfoContainer}>
      <ProfilePicture source={profile} size="large" />

      <View style={styles.nameContainer}>
        <Text style={styles.displayName}>Ryan Stern</Text>
        <Text style={styles.userHandle}>@ryan</Text>
      </View>
      <View style={styles.userBio}>
        <Text style={{fontSize: 15, color: 'grey'}}>
          Don't let the completed fool you. I still have a lot more to go. Don't
          let the completed fool you I still have a lot more to go more to go
        </Text>
      </View>

      <View style={styles.userDataContainer}>
        <View style={styles.userData}>
          <Text style={styles.amount}>327</Text>
          <Text style={styles.category}>Goals</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.amount}>55</Text>
          <Text style={styles.category}>Completed</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.amount}>6,969</Text>
          <Text style={styles.category}>Followers</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.amount}>1</Text>
          <Text style={styles.category}>Following</Text>
        </View>
      </View>
    </View>
  </View>
);

export default ProfileHeader;
