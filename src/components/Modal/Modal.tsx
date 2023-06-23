import {ReactNode} from 'react';
import {View, Modal as NativeModal, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({visible, onClose, children}: CustomModalProps) => {
  return (
    <NativeModal
      visible={visible}
      animationType="fade"
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
