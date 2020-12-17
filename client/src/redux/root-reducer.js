import {combineReducers} from 'redux';

import postsReducer from './posts/posts.reducer';
import goalReducer from './goals/goals.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  posts: postsReducer,
  goals: goalReducer,
  user: userReducer,
});
