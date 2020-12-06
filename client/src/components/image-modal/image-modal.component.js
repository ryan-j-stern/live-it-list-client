import React from 'react';
import {Modal, View, Image, Text, Dimensions} from 'react-native';

import CustomButton from '../custom-button/custom-button.component';

const ImageModal = ({showModal, setShowModal, ...otherProps}) => {
  const {date, imageUrl, caption} = otherProps;

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
        <Image
          source={imageUrl}
          style={{
            height: Dimensions.get('screen').height * 0.5,
            width: Dimensions.get('screen').width * 0.95,
            resizeMode: 'contain',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginBottom: '25%',
            width: Dimensions.get('screen').width * 0.95,
            paddingTop: 5,
          }}>
          {date ? (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                marginBottom: 20,
              }}>
              {date}
            </Text>
          ) : null}
          {caption ? (
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: '400',
              }}>
              {caption}
            </Text>
          ) : null}
        </View>
        <CustomButton
          handlePress={() => {
            setShowModal(!showModal);
          }}>
          Close
        </CustomButton>
      </View>
    </Modal>
  );
};

export default ImageModal;
