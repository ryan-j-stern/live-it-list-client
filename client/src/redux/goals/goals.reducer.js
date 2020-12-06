import canyons from '../../assets/images/canyons.jpg';
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
      progress: [
        {
          id: 9976,
          date: 'Nov. 19, 1994',
          caption: 'Bought the tickets! We leave in August!!!',
          imageUrl: canyons,
        },
        {
          id: 9998,
          date: 'Nov. 19, 1994',
          caption: 'Bought the tickets! We leave in August!!!',
          imageUrl: profilePic,
        },
      ],
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
      progress: [],
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
      progress: [
        {
          id: 99,
          date: 'Nov. 19, 1994',
          caption: 'First stop Colorado! 1/50 only 49 more to go. ',
          imageUrl: canyons,
        },
        {
          id: 993,
          date: 'Nov. 19, 1994',
          caption: 'Vegas!!! 2/50',
          imageUrl: profilePic,
        },
        {
          id: 9901,
          date: 'Nov. 19, 1994',
          caption: 'Arizona! 3/50',
          imageUrl: canyons,
        },
      ],
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
      progress: [],
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
