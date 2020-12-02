import React from 'react';
import {View, Text} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';

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
        {goal.completed === true ? (
          <Text style={styles.type}>Completed:</Text>
        ) : null}
        <Text style={styles.title}>{goal.title}</Text>
      </View>
      {goal.completed === false ? (
        <CustomButtonContainer type={goal.type} handleOpenComment={() => {}} />
      ) : null}
    </View>
  </View>
);

export default Goal;
