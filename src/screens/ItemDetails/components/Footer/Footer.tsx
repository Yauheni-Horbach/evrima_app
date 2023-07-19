import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {icons} from '@ui/index';

import {styles} from './styles';

export const Footer = ({
  onPressChangeState,
  isAddedToBookmarks,
  onAddToBookmarks,
}: {
  onPressChangeState: (event: 'like' | 'dislike') => void;
  isAddedToBookmarks: boolean;
  onAddToBookmarks: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressChangeState('dislike')}>
        <Image source={icons.dislike} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isAddedToBookmarks && styles.activeButton]}
        onPress={onAddToBookmarks}>
        <Image source={icons.star} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressChangeState('like')}>
        <Image source={icons.like} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
