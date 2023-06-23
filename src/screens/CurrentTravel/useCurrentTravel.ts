import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';

export const useCurrentTravel = () => {
  const navigation = useNavigation<NavigationProp<'NewTravel'>>();

  const onOpenSwipes = () => {
    navigation.navigate('TravelSwipes');
  };

  return {
    isLoading: false,
    errorText: '',
    onOpenSwipes,
  };
};
