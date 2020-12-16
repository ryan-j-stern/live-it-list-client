import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import SearchBar from '../../components/search-bar/search-bar.component';
import Post from '../../components/post/post.component';
import SettingsButton from '../../components/settings-button/settings-button.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectGoals} from '../../redux/posts/posts.selectors';

const HomePage = ({navigation, posts}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <Text style={{fontSize: 22}}>LiveItList</Text>,
      headerRight: () => <SettingsButton />,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar placeholder="Search For Friends" />
      {posts.map(post => (
        <Post goal={post} key={post.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: '#3783ff',
    // backgroundColor: '#687e8d',
    backgroundColor: '#bac7cd',
  },
});

const mapStateToProps = createStructuredSelector({
  posts: selectGoals,
});

export default connect(mapStateToProps)(HomePage);
