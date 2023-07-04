import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../../screens/Welcome';
import {Auth} from '../../screens/Auth';
import {Login} from '../../screens/Login';
import {Home} from '../../screens/Home';
import {Registration} from '../../screens/Registration';
import {Onboarding} from '../../screens/Onboarding';
import {Personalization} from '../../screens/Personalization';
import {NewTravel} from '../../screens/NewTravel';
import {CurrentTravel} from '../../screens/CurrentTravel';
import {TravelSwipes} from '../../screens/TravelSwipes';
import {SwipeItemDetails} from '../../screens/SwipeItemDetails';
import {RootStackParamList} from '../types';

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
    },
  },
};

const Stack = createStackNavigator<RootStackParamList>();
const ModalStack = createStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Personalization" component={Personalization} />
        <Stack.Screen name="NewTravel" component={NewTravel} />
        <Stack.Screen name="CurrentTravel" component={CurrentTravel} />
        <Stack.Screen name="TravelSwipes" component={TravelSwipes} />
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
