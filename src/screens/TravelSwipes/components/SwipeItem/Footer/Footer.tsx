import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {icons} from '@ui/index';

import {styles} from './styles';

export const Footer = ({
  isAddedToBookmarks,
  onChangeState,
  onAddToBookmarks,
}: {
  isAddedToBookmarks: boolean;
  onChangeState: (state: 'dislike' | 'like') => void;
  onAddToBookmarks: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChangeState('dislike')}>
        <Image source={icons.dislike} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isAddedToBookmarks && styles.disabledButton]}
        onPress={onAddToBookmarks}>
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
