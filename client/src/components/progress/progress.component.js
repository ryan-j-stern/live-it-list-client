import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import ImageModal from '../image-modal/image-modal.component';

import styles from './progress.styles';

const Progress = ({caption, imageUrl, date}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.progress}
      onPress={() => {
        setShowModal(!showModal);
      }}>
      <Image style={styles.backgroundImage} source={imageUrl}></Image>
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.date}>Updated: {date}</Text>
      </View>
      {showModal ? (
        <ImageModal
          setShowModal={setShowModal}
          showModal={showModal}
          caption={caption}
          imageUrl={imageUrl}
          date={date}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Progress;
