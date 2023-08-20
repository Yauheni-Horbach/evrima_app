import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useAuth = () => {
  const navigation = useNavigation<NavigationProp<'Auth'>>();

  const onAuthPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    navigation.navigate('Registration');
  };

  return {
    onAuthPress,
    onRegisterPress,
  };
};
