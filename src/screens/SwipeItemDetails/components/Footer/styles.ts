import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopColor: '#eee',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
