import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: 'gray',
  },
  button: {
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 20,
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  container: {
    alignItems: 'center',
    borderTopColor: '#eee',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
  },
  icon: {
    height: 24,
    resizeMode: 'contain',
    width: 24,
  },
});
