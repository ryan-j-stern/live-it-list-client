import React from 'react';
import {View, Text} from 'react-native';

import ProfilePicture from '../profile-picture/profile-picture.component';

import styles from './goal-header.styles';

const GoalHeader = ({imgUrl, name, date, size = 'small'}) => (
  <View style={styles.goalHeaderContainer}>
    <ProfilePicture source={imgUrl} size={size} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name.toLowerCase()}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>
);

export default GoalHeader;
