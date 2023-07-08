import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export interface SwipeItemDetailsProps {
  fsq_id: string;
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
  SwipeItemDetails: SwipeItemDetailsProps;
  SearchCurrentTravel: undefined;
  SettingsCurrentTravel: undefined;
  CurrentTravelNavigator: undefined;
  Bookmarks: undefined;
};

type AllNavigators = RootStackParamList;

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
    interface RootParamList extends AllNavigators {}

    type RouteFor<T extends keyof AllNavigators> = RouteProp<AllNavigators, T>;

    type RouteNames = keyof AllNavigators;

    type ScreenNames = GetNonStacks<AllNavigators>;

    /*
     * Routes without params only.
     * Exclude sprint navigators due to TS performance limitations
     * https://github.com/microsoft/TypeScript/issues/32749
     */
    type SimpleRoutesOnly = keyof GetWithNoParams<AllNavigators>;
  }
}
