import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from '@screens/Auth';
import {CurrentTravel} from '@screens/CurrentTravel';
import {Home} from '@screens/Home';
import {Login} from '@screens/Login';
import {NewTravel} from '@screens/NewTravel';
import {Onboarding} from '@screens/Onboarding';
import {Personalization} from '@screens/Personalization';
import {Registration} from '@screens/Registration';
import {SearchCurrentTravel} from '@screens/SearchCurrentTravel';
import {SettingsCurrentTravel} from '@screens/SettingsCurrentTravel';
import {SwipeItemDetails} from '@screens/SwipeItemDetails';
import {TravelSwipes} from '@screens/TravelSwipes';
import {Welcome} from '@screens/Welcome';

import {CurrentTravelTabs} from '../components';
import {RootStackParamList} from '../types';
import {Bookmarks} from '@screens/Bookmarks';

const linking = {
  prefixes: ['evrima://'],
  config: {
    screens: {
      Welcome: 'welcome',
      Auth: 'auth',
      Login: 'login',
      Home: 'home',
      Registration: 'registration',
      Onboarding: 'onboarding',
      Personalization: 'personalization',
      NewTravel: 'newTravel',
      CurrentTravel: 'currentTravel',
      TravelSwipes: 'travelSwipes',
      SwipeItemDetails: 'swipeItemDetails',
      SearchCurrentTravel: 'searchCurrentTravel',
      SettingsCurrentTravel: 'settingsCurrentTravel',
      Bookmarks: 'Bookmarks',
    },
  },
};

const Stack = createStackNavigator<RootStackParamList>();
const ModalStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const CurrentTravelNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="CurrentTravel"
      tabBar={CurrentTravelTabs}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{title: 'Search'}}
        name="SearchCurrentTravel"
        component={SearchCurrentTravel}
      />
      <Stack.Screen
        options={{title: 'Map'}}
        name="CurrentTravel"
        component={CurrentTravel}
      />
      <Stack.Screen
        options={{title: 'Swipes'}}
        name="TravelSwipes"
        component={TravelSwipes}
      />
      <Stack.Screen
        options={{title: 'Settings'}}
        name="SettingsCurrentTravel"
        component={SettingsCurrentTravel}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Personalization" component={Personalization} />
        <Stack.Screen name="NewTravel" component={NewTravel} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen
          name="CurrentTravelNavigator"
          component={CurrentTravelNavigator}
        />
        <ModalStack.Group>
          <Stack.Screen
            name="SwipeItemDetails"
            component={SwipeItemDetails}
            options={{
              presentation: 'modal',
            }}
          />
        </ModalStack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
