import canyons from '../../assets/images/canyons.jpg';
import profilePic from '../../assets/images/profile.jpg';

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      type: 'Created',
      title: 'Surf in Hawaii',
      date: '11.19.2020',
      user: {
        name: 'Ryan Stern',
        profilePic: profilePic,
      },
      likes: [
        {
          id: 7,
          name: 'Rachel Stern',
          imgUrl: canyons,
        },
        {
          id: 91,
          name: 'Rachel Stern',
          imgUrl: canyons,
        },
        {
          id: 97,
          name: 'Rachel Stern',
          imgUrl: canyons,
        },
        {
          id: 8,
          name: 'Corey Chin',
          imgUrl: canyons,
        },
      ],
      comments: [
        {
          id: 10,
          user: {
            id: 3,
            name: 'Corey Chin',
            imgUrl: canyons,
          },
          comment:
            'Looks amazing! So proud of you. You did great You did great You did great You did great',
        },
        {
          id: 11,
          user: {
            id: 4,
            name: 'Corey Chin',
            imgUrl: canyons,
          },
          comment: 'Fuck it.',
        },
      ],
    },
    {
      id: 2,
      type: 'Made Progress',
      title: 'Create a mobile app all by myself',
      date: '11.19.2020',
      user: {
        name: 'Ryan Stern',
        profilePic: profilePic,
      },
      likes: [
        {
          id: 5,
          name: 'Joe Smith',
          imgUrl: canyons,
        },
        {id: 6, name: 'Corey Chin', imgUrl: canyons},
      ],
      comments: [
        {
          id: 20,
          user: {
            name: 'Joe Smith',
            imgUrl: canyons,
          },
          comment: 'Looks amazing! So proud of you.',
        },
        {
          id: 221,
          user: {
            name: 'Gus Martinez',
            imgUrl: canyons,
          },
          comment: 'Fuck it.',
        },
      ],
    },
  ],
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
