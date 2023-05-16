import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {useOnboarding} from './useOnboarding';

export const Onboarding = () => {
  const {onGetStartedPress} = useOnboarding();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our App</Text>
      <Text style={styles.subtitle}>
        Explore and enjoy the features of our app.
      </Text>
      <Button title="Get Started" onPress={onGetStartedPress} />
    </View>
  );
};
