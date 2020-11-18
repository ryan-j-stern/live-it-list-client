import React from 'react';
import {View, Text, Button} from 'react-native';

import Comment from './comment/comment.component';

import styles from './comments-section.styles';

const CommentsSection = ({comments = [], handlePress}) => (
  <>
    {comments.length > 0 ? (
      <View style={styles.commentSectionContainer}>
        {comments.map(comment => (
          <Comment key={comment.id} comm={comment} />
        ))}
        <Button title="Hide comments" onPress={handlePress} />
      </View>
    ) : null}
  </>
);

export default CommentsSection;
