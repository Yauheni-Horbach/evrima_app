import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    padding: 10,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 2,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  disabledButton: {
    backgroundColor: 'grey',
    borderColor: 'blue',
    borderWidth: 4,
  },
});
