import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {icons} from '@ui/index';

import {styles} from './styles';

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