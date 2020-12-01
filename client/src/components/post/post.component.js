import React from 'react';
import {View, Text} from 'react-native';

import GoalHeader from '../goal-header/goal-header.component';
import CommentsSection from '../comments-section/comments-section.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';

import {connect} from 'react-redux';
import {toggleHideComments} from '../../redux/post/post.actions';
import {createStructuredSelector} from 'reselect';
import {selectHideComments} from '../../redux/post/post.selectors';

import styles from './post.styles';

const Post = ({goal, hideComments, toggleHideComments}) => (
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
        handleOpenComment={() => toggleHideComments(goal)}
      />
    </View>
    {hideComments ? null : (
      <CommentsSection
        comments={goal.comments}
        handlePress={() => toggleHideComments(goal)}
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
)(Post);
