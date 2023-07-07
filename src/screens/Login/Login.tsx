import React from 'react';
import {Button, Text, TextInput} from 'react-native';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useLogin} from './useLogin';

export const Login = () => {
  const {
    onLoginPress,
    onChangeEmail,
    onChangePassword,
    email,
    password,
    errorText,
    isLoading,
  } = useLogin();

  return (
    <ScreenWrapper style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={onChangePassword}
      />
      <Button title="Login" onPress={onLoginPress} />
      <Text>{errorText}</Text>
      {isLoading && <Text>Loading...</Text>}
    </ScreenWrapper>
  );
};
