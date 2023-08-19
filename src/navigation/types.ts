import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export interface ItemDetailsProps {
  fsq_id: string;
  type: 'search' | 'bookmarks' | 'currentTravel';
  subType?: 'bookmarks';
}

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  Login: undefined;
  Home: undefined;
  Registration: undefined;
  Onboarding: undefined;
  Personalization: undefined;
  NewTravel: undefined;
  CurrentTravel: undefined;
  TravelSwipes: undefined;
  ItemDetails: ItemDetailsProps;
  Search: undefined;
  SearchCurrentTravel: undefined;
  SettingsCurrentTravel: undefined;
  CurrentTravelNavigator: undefined;
  Bookmarks: undefined;
  Settings: undefined;
  JourneyHistory: undefined;
};

export type NavigationProp<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;

type GetNonStacks<
  T extends Record<string, unknown>,
  Key = keyof T,
> = Key extends string
  ? T[Key] extends NavigatorScreenParams<any>
    ? never
    : Key
  : never;

type GetWithNoParams<T> = {
  [P in keyof T as T[P] extends undefined ? P : never]: T[P];
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}

    type RouteFor<T extends keyof RootStackParamList> = RouteProp<
      RootStackParamList,
      T
    >;

    type RouteNames = keyof RootStackParamList;

    type ScreenNames = GetNonStacks<RootStackParamList>;

    type SimpleRoutesOnly = keyof GetWithNoParams<RootStackParamList>;
  }
}
