import React from 'react';
import {ScrollView} from 'react-native';

import TopTabs from '../../components/navigation/top-tabs.component';
import ProfileHeader from '../../components/profile-header/profile-header.component';

const ProfilePage = ({navigation}) => (
  <ScrollView>
    <ProfileHeader />
    <TopTabs />
  </ScrollView>
);

export default ProfilePage;
