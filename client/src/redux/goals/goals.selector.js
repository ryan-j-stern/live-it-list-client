import {createSelector} from 'reselect';

const selectGoalsReducer = state => state.goals;

const selectGoals = createSelector(
  [selectGoalsReducer],
  goalsReducer => goalsReducer.goals,
);

export const selectNotCompleted = createSelector(
  [selectGoals],
  goals => goals.filter(goal => goal.completed === false),
);

export const selectCompleted = createSelector(
  [selectGoals],
  goals => goals.filter(goal => goal.completed === true),
);

export const selectSearchField = createSelector(
  [selectGoalsReducer],
  goalsReducer => goalsReducer.searchField,
);
