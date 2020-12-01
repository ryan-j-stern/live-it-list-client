import React from 'react';
import {View} from 'react-native';
import CustomButton from '../custom-button/custom-button.component';

import styles from './custom-button-container.styles';

const CustomButtonContainer = ({type, handleOpenComment}) => (
  <View style={styles.buttonContainer}>
    {type === 'goal' ? (
      <CustomButton>Make Progress</CustomButton>
    ) : (
      <CustomButton>Like</CustomButton>
    )}
    {type === 'goal' ? (
      <CustomButton>Complete</CustomButton>
    ) : (
      <CustomButton handlePress={handleOpenComment}>Comment</CustomButton>
    )}
  </View>
);

export default CustomButtonContainer;
