import React from 'react';
import {View, Image} from 'react-native';

import styles from './profile-picture.styles';

const ProfilePicture = ({source, size}) => (
  <Image
    source={source}
    style={size == 'large' ? styles.large : styles.small}
  />
);

export default ProfilePicture;
