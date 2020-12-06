import React from 'react';
import {View, TextInput, Text} from 'react-native';

import CustomButtonContainer from '../../components/custom-button-container/custom-button-container.component';

import styles from './add-goal.styles';

const AddGoal = ({navigation}) => {
  return (
    <View style={styles.addGoal}>
      <View style={styles.topContainer}>
        <View style={styles.logo} />
        <TextInput
          placeholder="What's next?"
          multiline={true}
          numberOfLines={8}
          style={styles.input}
        />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>Some text that's motivational</Text>
        <Text style={styles.author}>- Author</Text>
      </View>
      <View style={styles.buttons}>
        <CustomButtonContainer
          type="submit"
          handleButtonPress1={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default AddGoal;
