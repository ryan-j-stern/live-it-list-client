import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  selectGoals,
  selectSearchField,
  selectNotCompleted,
} from '../../../redux/goals/goals.selector';
import {changeSearchFieldText} from '../../../redux/goals/goals.actions';

import SearchBar from '../../../components/search-bar/search-bar.component';
import Goal from '../../../components/goal/goal.component';

const GoalsPage = ({goals, searchField, changeSearchFieldText}) => {
  const searchableGoals = goals.filter(goal =>
    goal.title.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar
        placeholder="Search Your Goals"
        action={changeSearchFieldText}
      />
      {searchableGoals.map(goal => (
        <Goal key={goal.id} goal={goal} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

const mapStateToProps = createStructuredSelector({
  goals: selectNotCompleted,
  searchField: selectSearchField,
});

const mapDispatchToProps = dispatch => ({
  changeSearchFieldText: text => dispatch(changeSearchFieldText(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalsPage);
