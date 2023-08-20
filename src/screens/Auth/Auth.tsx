import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Button} from '@components/Button';
import {images} from '@ui/index';

import {styles} from './styles';
import {useAuth} from './useAuth';

export const Auth = () => {
  const {onAuthPress, onRegisterPress} = useAuth();

  return (
    <ImageBackground style={styles.container} source={images.ocean}>
      <View style={styles.content}>
        <Button
          title="Login"
          onPress={onAuthPress}
          style={[styles.topButton, styles.button]}
        />
        <Button
          title="Register"
          onPress={onRegisterPress}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};
