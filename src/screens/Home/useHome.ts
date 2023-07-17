import {NavigationProp} from '@navigation/types';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useCurrentTravelStore} from '@store/currentTravel';

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<'Home'>>();

  const {data} = useCurrentTravelStore();

  return {
    buttons: [
      {
        title: 'Creating Journey',
        onPress: () => navigation.navigate('NewTravel'),
      },
      {
        title: 'Current Journey',
        onPress: () => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'CurrentTravelNavigator'}],
            }),
          );
        },
        disabled: !data.id,
      },
      {
        title: 'Journey history',
        onPress: () => {},
      },
      {
        title: 'Location rating',
        onPress: () => {},
      },
      {title: 'Settings', onPress: () => navigation.navigate('Settings')},
      {title: 'Search', onPress: () => {}},
      {title: 'Bookmarks', onPress: () => navigation.navigate('Bookmarks')},
    ],
  };
};
