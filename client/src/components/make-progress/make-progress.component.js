import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import CustomButton from '../custom-button/custom-button.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';

import * as ImagePicker from 'react-native-image-picker';
import styles from './make-progress.styles';

const MakeProgressModal = ({showModal, setShowModal, goal}) => {
  const [currentFont, setCurrentFont] = useState(45);
  const [imageSelected, setImageSelected] = useState(null);
  const {title} = goal;

  selectImage = () =>
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        response.uri ? setImageSelected(response.uri) : setImageSelected(null);
      },
    );

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <SafeAreaView style={styles.makeProgress}>
        <View style={styles.topContainer}>
          <View style={styles.logoPlaceholder} />
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Make progress on:</Text>
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
                style={[styles.text, {fontSize: currentFont}]}>
                {title}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.imageButtonContainer}>
          {imageSelected === null ? (
            <CustomButton handlePress={selectImage}>Select Photo</CustomButton>
          ) : (
            <TouchableOpacity activeOpacity={0.8} onPress={selectImage}>
              <Image
                source={{uri: imageSelected}}
                style={styles.selectedImage}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Caption (140 characters max)"
            multiline={true}
            numberOfLines={8}
            style={styles.input}
          />
        </View>
        <View style={styles.buttons}>
          <CustomButtonContainer
            handleButtonPress1={() => {
              setShowModal(!showModal);
            }}
            type="submit"
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default MakeProgressModal;
