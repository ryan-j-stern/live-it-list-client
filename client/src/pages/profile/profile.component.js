import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import TopTabs from '../../components/navigation/top-tabs.component';

const ProfilePage = ({navigation}) => (
  <>
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('home')} />
    </View>
    <TopTabs />
  </>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;
