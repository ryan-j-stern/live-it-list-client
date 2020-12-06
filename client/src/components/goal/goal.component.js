import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';
import Progress from '../progress/progress.component';

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
      <ScrollView
        horizontal
        pagingEnabled={true}
        decelerationRate={0}
        snapToInterval={Dimensions.get('screen').width * 0.8}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: Dimensions.get('screen').width * 0.04,
          bottom: 0,
          right: Dimensions.get('screen').width * 0.04,
        }}>
        {goal.progress.map(progressItem => (
          <Progress
            key={progressItem.id}
            imageUrl={progressItem.imageUrl}
            caption={progressItem.caption}
            date={progressItem.date}
          />
        ))}
      </ScrollView>

      {goal.completed === false ? (
        <CustomButtonContainer type={goal.type} handleOpenComment={() => {}} />
      ) : null}
    </View>
  </View>
);

export default Goal;
