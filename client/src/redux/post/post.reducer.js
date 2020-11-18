import {POST_ACTION_TYPES} from './post.types';

const INITIAL_STATE = {
  hideComments: true,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_ACTION_TYPES.TOGGLE_COMMENTS:
      return {
        ...state,
        hideComments: !state.hideComments,
      };
    default:
      return state;
  }
};

export default postReducer;
