import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
};

export type NavigationProp<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;
