import {combineReducers} from 'redux';

import postsReducer from './posts/posts.reducer';
import goalReducer from './goals/goals.reducer';

export default combineReducers({
  posts: postsReducer,
  goals: goalReducer,
});
