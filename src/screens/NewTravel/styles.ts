import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textValue: {
    flex: 2,
    height: 40,
    fontSize: 26,
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  map: {
    height: 300,
    width: 300,
  },
  containerMap: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});