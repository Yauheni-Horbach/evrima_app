import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>Enjoy your stay.</Text>
    </View>
  );
};
