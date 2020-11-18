import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './custom-button.styles';

const CustomButton = ({handlePress, children}) => (
  <TouchableOpacity style={styles.customButtonContainer} onPress={handlePress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

export default CustomButton;
