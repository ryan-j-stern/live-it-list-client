import {combineReducers} from 'redux';

import postsReducer from './posts/posts.reducer';
import postReducer from './post/post.reducer';

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
});
