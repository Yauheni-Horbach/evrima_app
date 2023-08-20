import {StyleSheet} from 'react-native';
import {colors} from '@ui/colors';

export const styles = StyleSheet.create({
  button: {width: '70%'},
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 320,
    justifyContent: 'center',
    width: 320,
  },
  topButton: {
    marginBottom: 10,
  },
});
