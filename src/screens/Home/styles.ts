import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 2,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
