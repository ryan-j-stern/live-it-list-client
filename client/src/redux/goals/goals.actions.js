import {GOALS_TYPES} from './goals.types';

export const changeSearchFieldText = payload => ({
  type: GOALS_TYPES.CHANGE_SEARCH_FIELD,
  payload,
});
