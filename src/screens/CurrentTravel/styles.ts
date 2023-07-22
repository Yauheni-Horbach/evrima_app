import {StyleSheet} from 'react-native';

const buttonWidth = 80;

export const styles = StyleSheet.create({
  activePlace: {
    backgroundColor: 'yellow',
  },
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
  directionsInfoItem: {
    width: '50%',
  },
  map: {
    height: 400,
    width: 400,
  },
  placeItem: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',

    marginBottom: 5,
    width: '100%',
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
  swipeableContainer: {
    flexDirection: 'row',
  },
  swipeableDelete: {
    backgroundColor: 'red',
  },
  swipeableDetails: {
    backgroundColor: 'blue',
  },
});
