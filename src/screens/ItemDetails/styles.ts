import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#E8E8E8',
    borderRadius: 4,
    borderWidth: 2,
    flex: 1,
    justifyContent: 'flex-start',
  },
  carouselItemBody: {
    flex: 1,
    justifyContent: 'center',
  },
  carouselItemImage: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  footer: {
    paddingBottom: 20,
    width: '100%',
  },
  map: {
    height: 300,
    width: 300,
  },
  mapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  name: {
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratingContainer: {
    height: 50,
    width: '100%',
  },
  separator: {
    backgroundColor: '#E8E8E8',
    height: 1,
    width: '100%',
  },
});
