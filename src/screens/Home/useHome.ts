import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
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
        onPress: () => navigation.navigate('CurrentTravelNavigator'),
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
      {title: 'Settings', onPress: () => {}},
      {title: 'Search', onPress: () => {}},
    ],
  };
};
