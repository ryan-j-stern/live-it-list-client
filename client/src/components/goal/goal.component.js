import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';
import Progress from '../progress/progress.component';
import MakeProgressModal from '../make-progress/make-progress.component';

import styles from './goal.styles';

// Add MakeProgressModal when Button1 is clicked

const Goal = ({goal}) => {
  const [showModal, setShowModal] = useState(false);

  return (
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
          <CustomButtonContainer
            handleButtonPress1={() => setShowModal(!showModal)}
            type={goal.type}
          />
        ) : null}
        {showModal ? (
          <MakeProgressModal
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Goal;
