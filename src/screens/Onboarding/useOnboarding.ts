import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useOnboarding = () => {
  const navigation = useNavigation<NavigationProp<'Onboarding'>>();

  const onGetStartedPress = () => {
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  };

  return {
    onGetStartedPress,
  };
};
