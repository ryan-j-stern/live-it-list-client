import React from 'react';
import {View, Text} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CustomButton from '../custom-button/custom-button.component';
import CommentsSection from '../comments-section/comments-section.component';

import {connect} from 'react-redux';
import {toggleHideComments} from '../../redux/post/post.actions';
import {createStructuredSelector} from 'reselect';
import {selectHideComments} from '../../redux/post/post.selectors';

import styles from './goal.styles';

const Goal = ({goal, hideComments, toggleHideComments}) => (
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

      {goal.type !== '' ? (
        <View style={styles.likeCommentContainer}>
          <Text style={styles.likeCommentText}>{goal.likes.length} likes</Text>
          <Text style={styles.likeCommentText}>
            {goal.comments.length} comments
          </Text>
        </View>
      ) : null}

      <View style={styles.buttonContainer}>
        {goal.type === '' ? (
          <CustomButton>Make Progress</CustomButton>
        ) : (
          <CustomButton>Like</CustomButton>
        )}
        {goal.type === '' ? (
          <CustomButton>Complete</CustomButton>
        ) : (
          <CustomButton handlePress={() => toggleHideComments()}>
            Comment
          </CustomButton>
        )}
      </View>
    </View>
    {hideComments || goal.type === '' ? null : (
      <CommentsSection
        comments={goal.comments}
        handlePress={() => toggleHideComments()}
      />
    )}
  </View>
);

const mapStateToProps = createStructuredSelector({
  hideComments: selectHideComments,
});

const mapDispatchToProps = dispatch => ({
  toggleHideComments: () => dispatch(toggleHideComments()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goal);
