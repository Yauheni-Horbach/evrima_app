import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {icons} from '@ui/index';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.dislike} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.star} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.like} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
