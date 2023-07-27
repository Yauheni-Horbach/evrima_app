import React from 'react';
import {Modal as NativeModal, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ref?: React.LegacyRef<NativeModal>;
}

export const Modal = ({visible, onClose, children}: CustomModalProps) => {
  if (!visible) return null;
  return (
    <NativeModal
      visible={visible}
      animationType="slide"
      transparent
      style={styles.modalContainer}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {children}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeModal>
  );
};
