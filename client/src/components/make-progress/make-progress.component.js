import React, {useState} from 'react';
import {Modal, View, Text, TextInput, Dimensions} from 'react-native';

import CustomButton from '../custom-button/custom-button.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';

const MakeProgressModal = ({showModal, setShowModal, ...otherProps}) => {
  // const {} = otherProps;
  const [currentFont, setCurrentFont] = useState(35);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: Dimensions.get('screen').width * 0.9,
              padding: 5,
            }}>
            <Text style={{color: 'white'}}>Make progress on:</Text>
            <View>
              <Text
                numberOfLines={2}
                adjustsFontSizeToFit
                onTextLayout={e => {
                  const {lines} = e.nativeEvent;
                  if (lines.length > 2) {
                    setCurrentFont(currentFont - 1);
                  }
                }}
                style={{color: 'white', fontSize: currentFont}}>
                Dive in the Gulf of Mexico
              </Text>
            </View>
          </View>
        </View>
        <View style={{display: 'flex', justifyContent: 'center'}}>
          <CustomButton>Select Photo</CustomButton>
        </View>
        <View
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}>
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
        </View>
        <View
          style={{
            display: 'flex',
            flex: 0.5,
            justifyContent: 'center',
          }}>
          <CustomButtonContainer
            handleButtonPress1={() => {
              setShowModal(!showModal);
            }}
            type="submit"
          />
        </View>
      </View>
    </Modal>
  );
};

export default MakeProgressModal;
