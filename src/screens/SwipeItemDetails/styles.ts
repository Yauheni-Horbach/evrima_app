import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  map: {
    height: 300,
    width: 300,
  },
  mapContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
