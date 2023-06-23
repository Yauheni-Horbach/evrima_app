import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useAuth = () => {
  const navigation = useNavigation<NavigationProp<'Auth'>>();

  const handleAuthPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Registration');
  };

  const handleContinueAsGuestPress = () => {
    navigation.navigate('Home');
  };

  return {
    onAuthPress: handleAuthPress,
    onRegisterPress: handleRegisterPress,
    onContinueAsGuestPress: handleContinueAsGuestPress,
  };
};
