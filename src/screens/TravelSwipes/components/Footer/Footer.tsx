import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/dislike.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/like.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/like.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/like.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
