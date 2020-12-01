import {combineReducers} from 'redux';

import postsReducer from './posts/posts.reducer';
import postReducer from './post/post.reducer';
import goalReducer from './goals/goals.reducer';

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
  goals: goalReducer,
});
