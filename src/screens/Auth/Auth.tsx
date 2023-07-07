import React from 'react';
import {Button, View} from 'react-native';

import {styles} from './styles';
import {useAuth} from './useAuth';

export const Auth = () => {
  const {onAuthPress, onRegisterPress, onContinueAsGuestPress} = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={onAuthPress} />
      <Button title="Register" onPress={onRegisterPress} />
      <Button title="Continue as guest" onPress={onContinueAsGuestPress} />
    </View>
  );
};
