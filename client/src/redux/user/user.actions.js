import {USER_TYPES} from './user.types';

export const facebookLogin = user => ({
  type: USER_TYPES.FACEBOOK_LOGIN,
  payload: user,
});
