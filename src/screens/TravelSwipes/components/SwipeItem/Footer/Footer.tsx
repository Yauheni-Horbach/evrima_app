import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {icons} from '@ui/index';

export const Footer = ({
  onChangeState,
}: {
  onChangeState: (state: 'dislike' | 'like') => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChangeState('dislike')}>
        <Image source={icons.dislike} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.star} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangeState('like');
        }}>
        <Image source={icons.like} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
