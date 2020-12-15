import React from 'react';
import {View} from 'react-native';
import CustomButton from '../custom-button/custom-button.component';

import styles from './custom-button-container.styles';

const CustomButtonContainer = ({
  type,
  handleButtonPress1,
  handleButtonPress2,
}) => {
  let textButton1;
  let textButton2;

  switch (type) {
    case 'goal':
      textButton1 = 'Make Progress';
      textButton2 = 'Complete';
      break;
    case 'submit':
      textButton1 = 'Cancel';
      textButton2 = 'Submit';
      break;
    case 'complete':
      textButton1 = 'Cancel';
      textButton2 = 'Complete';
      break;
    case 'yesno':
      textButton1 = 'No';
      textButton2 = 'Yes';
      break;
    default:
      textButton1 = 'Boost';
      textButton2 = 'Comment';
      break;
  }

  return (
    <View style={styles.buttonContainer}>
      <CustomButton handlePress={handleButtonPress1}>
        {textButton1}
      </CustomButton>
      <CustomButton handlePress={handleButtonPress2}>
        {textButton2}
      </CustomButton>
    </View>
  );
};

export default CustomButtonContainer;
