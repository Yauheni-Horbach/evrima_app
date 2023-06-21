import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

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
        onPress: () => console.log('Journey history pressed'),
      },
      {
        title: 'Location rating',
        onPress: () => console.log('Location rating pressed'),
      },
      {title: 'Settings', onPress: () => console.log('Settings pressed')},
      {title: 'Search', onPress: () => console.log('Search pressed')},
    ],
  };
};
