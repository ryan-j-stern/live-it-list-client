import React from 'react';
import {View, Text} from 'react-native';

import GoalHeader from '../../goal-header/goal-header.component';

import styles from './comment.styles';

const Comment = ({comm}) => (
  <View style={styles.commentContainer}>
    <GoalHeader
      imgUrl={comm.user.imgUrl}
      name={comm.user.name}
      size="x-small"
      key={comm.user.id}
    />
    <Text style={styles.comment}>{comm.comment}</Text>
  </View>
);

export default Comment;
