import {StyleSheet} from 'react-native';

const buttonWidth = 80;

export const styles = StyleSheet.create({
  activePlace: {
    backgroundColor: 'yellow',
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
  swipeableDone: {
    backgroundColor: 'green',
  },
  visitedPlace: {
    backgroundColor: 'green',
  },
});
