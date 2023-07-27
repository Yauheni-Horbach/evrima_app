import {StyleSheet} from 'react-native';

const buttonWidth = 80;

export const styles = StyleSheet.create({
  containerMap: {
    alignItems: 'center',
    height: 450,
    width: '100%',
  },
  directionsContainer: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    height: 50,
    marginTop: -50,
  },
  map: {
    height: 400,
    width: 400,
  },
  placeList: {
    backgroundColor: 'white',
  },
  swipeableButton: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    width: buttonWidth,
  },
  swipeableButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
