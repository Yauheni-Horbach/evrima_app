import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';

export const useWelcome = () => {
  const navigation = useNavigation<NavigationProp<'Welcome'>>();

  const onBackgroundPress = () => {
    navigation.navigate('Auth');
  };

  return {
    onBackgroundPress,
  };
};
