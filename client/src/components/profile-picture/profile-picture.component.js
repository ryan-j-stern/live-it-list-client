import React from 'react';
import {Image} from 'react-native';

import styles from './profile-picture.styles';

const ProfilePicture = ({source, size}) => {
  let picStyle;

  if (size === 'large') picStyle = styles.large;
  else if (size === 'x-small') picStyle = styles.xSmall;
  else picStyle = styles.small;

  return <Image source={source} style={picStyle} />;
};

export default ProfilePicture;
