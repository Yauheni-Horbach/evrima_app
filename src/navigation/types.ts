import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  Login: undefined;
  Home: undefined;
  Registration: undefined;
  Onboarding: undefined;
  Personalization: undefined;
};

export type NavigationProp<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;
