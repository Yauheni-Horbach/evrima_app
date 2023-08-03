import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Modal} from '@components/Modal';

import {styles} from './styles';

interface ModalProps {
  isModalOpen: boolean;
  changeStateModal: () => void;
  changeImage: (uri: string) => void;
}

export const ImageModal = ({
  isModalOpen,
  changeStateModal,
  changeImage,
}: ModalProps) => {
  const onClose = () => {
    changeStateModal();
  };

  const onCreateImage = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
    });

    console.log(result);
  };

  const onLaunchImage = async () => {
    await launchImageLibrary({
      mediaType: 'photo',
    })
      .then(result => {
        changeImage(result.assets?.[0].uri || '');
      })
      .finally(() => {
        onClose();
      });
  };

  return (
    <Modal visible={isModalOpen} onClose={onClose}>
      <TouchableOpacity style={styles.doneButton} onPress={onLaunchImage}>
        <Text style={styles.doneButtonText}>Launch image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.doneButton} onPress={onCreateImage}>
        <Text style={styles.doneButtonText}>Create image</Text>
      </TouchableOpacity>
    </Modal>
  );
};
