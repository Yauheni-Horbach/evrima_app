import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    flex: 2,
    height: 40,
    paddingHorizontal: 8,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  selectList: {
    width: 200,
  },
  textValue: {
    flex: 2,
    fontSize: 26,
    height: 40,
  },
});
