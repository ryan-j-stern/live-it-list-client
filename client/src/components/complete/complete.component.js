import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';

import CustomButton from '../custom-button/custom-button.component';
import CustomButtonContainer from '../custom-button-container/custom-button-container.component';
import Progress from '../progress/progress.component';

import styles from './complete.styles';

const Complete = ({showModal, setShowModal, goal}) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [currentFont, setCurrentFont] = useState(45);
  const {title} = goal;

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
            <Text style={styles.text}>Complete:</Text>
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
        {showMovieModal ? (
          <CompleteMovie
            showModal={showMovieModal}
            setShowModal={setShowMovieModal}
          />
        ) : null}
        <View style={styles.inputContainer}>
          <ScrollView
            horizontal
            pagingEnabled={true}
            decelerationRate={0}
            style={{width: Dimensions.get('screen').width * 0.9}}
            snapToInterval={Dimensions.get('screen').width * 0.8}
            snapToAlignment="center"
            contentInset={{
              top: 0,
              left: Dimensions.get('screen').width * 0.04,
              bottom: 0,
              right: Dimensions.get('screen').width * 0.04,
            }}>
            {goal.progress.map(progressItem => (
              <Progress
                key={progressItem.id}
                imageUrl={progressItem.imageUrl}
                caption={progressItem.caption}
                date={progressItem.date}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttons}>
          <CustomButtonContainer
            handleButtonPress1={() => {
              setShowModal(!showModal);
            }}
            handleButtonPress2={() => setShowMovieModal(!showMovieModal)}
            type="complete"
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const CompleteMovie = ({showModal, setShowModal}) => (
  <Modal animationType="slide" transparent={true} visible={showModal}>
    <SafeAreaView
      style={{
        backgroundColor: '#3783FF',
        height: Dimensions.get('screen').height * 0.3,
        width: Dimensions.get('screen').width * 0.8,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        top: Dimensions.get('screen').height * 0.3,
        borderRadius: 15,
      }}>
      <View
        style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
        <View style={styles.logoPlaceholder} />
        <Text style={{color: 'white', fontSize: 25}}>
          Make a movie out of your progress?
        </Text>
        <CustomButtonContainer
          handleButtonPress1={() => setShowModal(!showModal)}
          type="yesno"
        />
      </View>
    </SafeAreaView>
  </Modal>
);

export default Complete;
