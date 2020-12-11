import React from 'react';
import {SafeAreaView, View, TextInput, Text, Dimensions} from 'react-native';

import CustomButtonContainer from '../../components/custom-button-container/custom-button-container.component';

import styles from './add-goal.styles';

const AddGoal = ({navigation}) => {
  return (
    // <View style={styles.addGoal}>
    //   <View style={styles.topContainer}>
    //     <View style={styles.logo} />
    //     <TextInput
    //       placeholder="What's next?"
    //       multiline={true}
    //       numberOfLines={8}
    //       style={styles.input}
    //     />
    //   </View>
    //   <View style={styles.quoteContainer}>
    //     <Text style={styles.quote}>Some text that's motivational</Text>
    //     <Text style={styles.author}>- Author</Text>
    //   </View>
    //   <View style={styles.buttons}>
    //     <CustomButtonContainer
    //       type="submit"
    //       handleButtonPress1={() => navigation.goBack()}
    //     />
    //   </View>
    // </View>

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <View
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: '25%',
          width: Dimensions.get('screen').width * 0.95,
          paddingTop: 5,
        }}></View> */}
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // borderColor: 'white',
          // borderWidth: 1,
        }}>
        <View
          style={{
            borderColor: 'white',
            borderRadius: 50,
            borderWidth: 1,
            height: 55,
            width: 55,
          }}
        />
        <TextInput
          placeholder="Caption (140 characters max)"
          multiline={true}
          numberOfLines={8}
          style={{
            borderColor: 'black',
            borderRadius: 15,
            borderWidth: 1,
            height: Dimensions.get('screen').height * 0.15,
            width: Dimensions.get('screen').width * 0.9,
            padding: 10,
            paddingTop: 10,
            fontSize: 23,
            fontWeight: '300',
            backgroundColor: 'white',
          }}
        />
        {/* <Text style={{color: 'white', fontSize: 30}}>Title of goal</Text> */}
        {/* <CustomButton>Select Photo</CustomButton> */}
      </View>
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          // borderColor: 'white',
          // borderWidth: 1,
          width: Dimensions.get('screen').width * 0.9,
          justifyContent: 'space-evenly',
        }}>
        <Text style={{color: 'white', fontSize: 30}}>
          Some motivational quote about motivation
        </Text>
        <Text style={{color: 'white', fontSize: 20, marginLeft: 'auto'}}>
          - Author Name
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flex: 0.5,
          justifyContent: 'center',
        }}>
        <CustomButtonContainer
          handleButtonPress1={() => {
            navigation.goBack();
          }}
          type="submit"
        />
      </View>
    </SafeAreaView>
  );
};

export default AddGoal;
