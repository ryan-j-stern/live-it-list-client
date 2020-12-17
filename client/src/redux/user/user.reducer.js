import {USER_TYPES} from './user.types';

const INITIAL_STATE = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    displayName: '',
    provider: '',
    facebookId: '',
    googleId: '',
    photoUrl: '',
    bio:
      'This is where you put your bio. Information you want to share with your followers or people who view your profile.',
  },
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_TYPES.FACEBOOK_LOGIN:
      const data = action.payload;
      return {
        ...state,
        user: {
          displayName: data.displayName,
          email: data.email,
          facebookId: data.facebookId,
          firstName: data.firstName,
          lastName: data.lastName,
          photoUrl: data.photoUrl,
        },

        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
