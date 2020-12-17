import React from 'react';
import {ScrollView} from 'react-native';

import {connect} from 'react-redux';
import {selectUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

import TopTabs from '../../components/navigation/top-tabs.component';
import ProfileHeader from '../../components/profile-header/profile-header.component';

const ProfilePage = ({user, navigation}) => (
  <ScrollView>
    <ProfileHeader user={user} />
    <TopTabs />
  </ScrollView>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(ProfilePage);
