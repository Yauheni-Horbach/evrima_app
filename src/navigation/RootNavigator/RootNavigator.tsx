import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../../screens/Welcome';

const linking = {
  prefixes: ['evrima://'],
  config: {
    screens: {
      Welcome: 'welcome',
    },
  },
};

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
