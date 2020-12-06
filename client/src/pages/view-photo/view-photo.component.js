import React from 'react';
import {View, StyleSheet} from 'react-native';

import CustomButton from '../../components/custom-button/custom-button.component';
import Progress from '../../components/progress/progress.component';

const ViewPhoto = ({navigation, imageUrl, caption, date}) => {
  return (
    <View>
      <Progress imageUrl={imageUrl} caption={caption} date={date} />
      <CustomButton handlePress={() => navigation.goBack()}>
        Go Back
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ViewPhoto;
