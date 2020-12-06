import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';

import ProfilePicture from '../profile-picture/profile-picture.component';
import ImageModal from '../image-modal/image-modal.component';

import profile from '../../assets/images/profile.jpg';
import headerBkg from '../../assets/images/canyons.jpg';

import styles from './profile-header.styles';

const ProfileHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowModal(!showModal)}
          style={{
            alignItems: 'center',
          }}>
          <ProfilePicture source={profile} size="large" />
          <ImageModal
            imageUrl={profile}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </TouchableOpacity>

        <View style={styles.nameContainer}>
          <Text style={styles.displayName}>Ryan Stern</Text>
          <Text style={styles.userHandle}>@ryan</Text>
        </View>
        <View style={styles.userBio}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            Don't let the completed fool you. I still have a lot more to go.
            Don't let the completed fool you I still have a lot more to go more
            to go
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
};

export default ProfileHeader;
