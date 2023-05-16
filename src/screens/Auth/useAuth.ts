import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export const useAuth = () => {
  const navigation = useNavigation<NavigationProp<'Auth'>>();

  const handleAuthPress = () => {
    console.log('Auth button pressed');
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    console.log('Register button pressed');
    navigation.navigate('Registration');
  };

  const handleContinueAsGuestPress = () => {
    console.log('Continue as Guest button pressed');
    navigation.navigate('Home');
  };

  return {
    onAuthPress: handleAuthPress,
    onRegisterPress: handleRegisterPress,
    onContinueAsGuestPress: handleContinueAsGuestPress,
  };
};
