import {createSelector} from 'reselect';

const selectPosts = state => state.posts;

export const selectGoals = createSelector(
  [selectPosts],
  posts => posts.posts,
);
