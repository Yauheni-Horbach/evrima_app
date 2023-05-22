import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {styles} from './styles';
import {useRegistration} from './useRegistration';

export const Registration = () => {
  const {
    onRegisterPress,
    onChangeEmail,
    onChangePassword,
    onChangeName,
    name,
    email,
    password,
    errorText,
    isLoading,
  } = useRegistration();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}
      />
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
      <Button title="Register" onPress={onRegisterPress} />
      <Text>{errorText}</Text>
      {isLoading && <Text>Loading...</Text>}
    </View>
  );
};
