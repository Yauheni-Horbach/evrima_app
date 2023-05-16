import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export const useOnboarding = () => {
  const navigation = useNavigation<NavigationProp<'Onboarding'>>();

  const handleGetStartedPress = () => {
    // Handle "Get Started" button press
    console.log('Get Started pressed');
    navigation.navigate('Personalization');
  };

  return {
    onGetStartedPress: handleGetStartedPress,
  };
};
