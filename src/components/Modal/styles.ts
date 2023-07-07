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
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    zIndex: 9999,
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
  },
});
