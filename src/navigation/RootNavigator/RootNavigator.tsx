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
    },
  },
};

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Personalization" component={Personalization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
