import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<'Home'>>();

  return {
    buttons: [
      {
        title: 'Creating Journey',
        onPress: () => navigation.navigate('NewTravel'),
      },
      {
        title: 'Current Journey',
        onPress: () => navigation.navigate('CurrentTravel'),
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
