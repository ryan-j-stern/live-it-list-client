import profilePic from '../../assets/images/profile.jpg';
import {GOALS_TYPES} from './goals.types';

const INITIAL_STATE = {
  goals: [
    {
      id: 1,
      type: 'goal',
      title: 'Surf in Hawaii',
      date: '11.19.2020',
      completed: true,
      user: {
        name: 'Ryan Stern',
        profilePic: profilePic,
      },
    },
    {
      id: 11,
      type: 'goal',
      title: 'Run a marathon',
      date: '11.19.2020',
      completed: true,
      user: {
        name: 'Ryan Stern',
        profilePic: profilePic,
      },
    },
    {
      id: 111,
      type: 'goal',
      title: 'Visit all 50 states',
      date: '11.19.2020',
      completed: false,
      user: {
        name: 'Ryan Stern',
        profilePic: profilePic,
      },
    },
    {
      id: 1141,
      type: 'goal',
      title: 'Get on the Joe Rogan Podcast',
      date: '11.19.2020',
      completed: false,
      user: {
        name: 'Ryan Stern',
        profilePic: profilePic,
      },
    },
  ],
  searchField: '',
};

const goalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOALS_TYPES.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

export default goalReducer;
