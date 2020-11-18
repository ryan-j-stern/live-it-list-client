import React from 'react';
import {View, Text} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CustomButton from '../custom-button/custom-button.component';
import CommentsSection from '../comments-section/comments-section.component';

import styles from './goal.styles';

const Goal = ({goal}) => (
  <View style={styles.container}>
    <View style={styles.goalContainer}>
      <GoalHeader
        imgUrl={goal.user.profilePic}
        name={goal.user.name}
        date={goal.date}
      />
      <View style={styles.textContainer}>
        {goal.type !== '' ? (
          <Text style={styles.type}>{goal.type}:</Text>
        ) : null}
        <Text style={styles.title}>{goal.title}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {goal.type === '' ? (
          <CustomButton>Make Progress</CustomButton>
        ) : (
          <CustomButton>Like</CustomButton>
        )}
        {goal.type === '' ? (
          <CustomButton>Complete</CustomButton>
        ) : (
          <CustomButton>Comment</CustomButton>
        )}
      </View>
    </View>
    <CommentsSection comments={goal.comments} />
  </View>
);

export default Goal;
