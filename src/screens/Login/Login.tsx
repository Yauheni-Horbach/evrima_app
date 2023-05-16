import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {styles} from './styles';
import {useLogin} from './useLogin';

export const Login = () => {
  const {onLoginPress, onChangeEmail, onChangePassword, email, password} =
    useLogin();

  return (
    <View style={styles.container}>
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
    </View>
  );
};
