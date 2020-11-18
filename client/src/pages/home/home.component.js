import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import SearchBar from '../../components/search-bar/search-bar.component';
import Goal from '../../components/goal/goal.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectGoals} from '../../redux/posts/posts.selectors';

const HomePage = ({posts}) => (
  <ScrollView contentContainerStyle={styles.container}>
    <SearchBar placeholder="Search For Friends" />
    {posts.map(post => (
      <Goal goal={post} key={post.id} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

const mapStateToProps = createStructuredSelector({
  posts: selectGoals,
});

export default connect(mapStateToProps)(HomePage);
