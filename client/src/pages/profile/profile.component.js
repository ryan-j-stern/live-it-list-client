import React from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';

import TopTabs from '../../components/navigation/top-tabs.component';

const ProfilePage = ({navigation}) => (
  <ScrollView>
    <View style={styles.userInfo}>
      <Text>Profile Page</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('home')} />
    </View>
    <TopTabs />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  userInfo: {
    display: 'flex',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;
