import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';

export const useOnboarding = () => {
  const navigation = useNavigation<NavigationProp<'Onboarding'>>();

  const handleGetStartedPress = () => {
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  };

  return {
    onGetStartedPress: handleGetStartedPress,
  };
};
