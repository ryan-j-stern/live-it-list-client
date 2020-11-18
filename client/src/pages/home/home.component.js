import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import SearchBar from '../../components/search-bar/search-bar.component';
import Goal from '../../components/goal/goal.component';

import canyons from '../../assets/images/canyons.jpg';
import profilePic from '../../assets/images/profile.jpg';

const goals = [
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
];

const HomePage = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <SearchBar placeholder="Search For Friends" />
    {goals.map(goal => (
      <Goal goal={goal} key={goal.id} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default HomePage;
