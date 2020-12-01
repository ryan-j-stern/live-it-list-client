import {createSelector} from 'reselect';

const selectGoalsReducer = state => state.goals;

export const selectGoals = createSelector(
  [selectGoalsReducer],
  goalsReducer => goalsReducer.goals,
);

export const selectSearchField = createSelector(
  [selectGoalsReducer],
  goalsReducer => goalsReducer.searchField,
);
