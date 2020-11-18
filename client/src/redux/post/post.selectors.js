import {createSelector} from 'reselect';

const selectPost = state => state.post;

export const selectHideComments = createSelector(
  [selectPost],
  post => post.hideComments,
);
