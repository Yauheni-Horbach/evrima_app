import React from 'react';
import {Button, Text} from 'react-native';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useOnboarding} from './useOnboarding';

export const Onboarding = () => {
  const {onGetStartedPress} = useOnboarding();

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>Welcome to our App</Text>
      <Text style={styles.subtitle}>
        Explore and enjoy the features of our app.
      </Text>
      <Button title="Get Started" onPress={onGetStartedPress} />
    </ScreenWrapper>
  );
};
