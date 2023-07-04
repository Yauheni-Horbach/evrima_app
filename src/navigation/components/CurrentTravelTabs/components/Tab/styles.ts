import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 12,
  },
  mainButtonText: {
    fontSize: 24,
  },
  mainButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  activeTabButton: {
    backgroundColor: 'red',
  },
});
