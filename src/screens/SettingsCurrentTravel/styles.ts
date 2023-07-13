import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerMap: {
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
    width: '100%',
  },
  containerSlider: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
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
  map: {
    height: 300,
    width: 300,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  textValue: {
    flex: 2,
    fontSize: 26,
    height: 40,
  },
});
