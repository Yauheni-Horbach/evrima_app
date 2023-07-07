import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useWelcome = () => {
  const navigation = useNavigation<NavigationProp<'Welcome'>>();

  const onBackgroundPress = () => {
    navigation.navigate('Auth');
  };

  return {
    onBackgroundPress,
  };
};
