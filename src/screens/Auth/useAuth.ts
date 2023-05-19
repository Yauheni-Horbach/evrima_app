import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export const useAuth = () => {
  const navigation = useNavigation<NavigationProp<'Auth'>>();

  const handleAuthPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Registration');
  };

  const handleContinueAsGuestPress = () => {
    navigation.navigate('Personalization');
  };

  return {
    onAuthPress: handleAuthPress,
    onRegisterPress: handleRegisterPress,
    onContinueAsGuestPress: handleContinueAsGuestPress,
  };
};
