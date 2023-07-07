import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './styles';
import {useWelcome} from './useWelcome';

export const Welcome = () => {
  const {onBackgroundPress} = useWelcome();

  return (
    <Pressable onPress={onBackgroundPress} style={styles.container}>
      <Text>Welcome</Text>
    </Pressable>
  );
};
