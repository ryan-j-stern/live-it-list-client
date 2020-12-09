import React, {useState} from 'react';
import {View, Text} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CommentsSection from '../comments-section/comments-section.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';

import styles from './post.styles';

const Post = ({goal}) => {
  const [hideComments, setHideComments] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <GoalHeader
          imgUrl={goal.user.profilePic}
          name={goal.user.name}
          date={goal.date}
        />
        <View style={styles.textContainer}>
          <Text style={styles.type}>{goal.type}:</Text>

          <Text style={styles.title}>{goal.title}</Text>
        </View>

        <View style={styles.likeCommentContainer}>
          <Text style={styles.likeCommentText}>{goal.likes.length} likes</Text>
          <Text style={styles.likeCommentText}>
            {goal.comments.length} comments
          </Text>
        </View>
        <CustomButtonContainer
          type={goal.type}
          handleButtonPress2={() => setHideComments(!hideComments)}
        />
      </View>
      {hideComments ? null : (
        <CommentsSection
          comments={goal.comments}
          handlePress={() => setHideComments(!hideComments)}
        />
      )}
    </View>
  );
};

export default Post;
