import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
  },
});
