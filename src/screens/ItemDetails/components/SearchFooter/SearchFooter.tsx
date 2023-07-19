import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {icons} from '@ui/index';

import {styles} from './styles';

export const SearchFooter = ({
  isAddedToBookmarks,
  onAddToBookmarks,
}: {
  isAddedToBookmarks: boolean;
  onAddToBookmarks: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isAddedToBookmarks && styles.activeButton]}
        onPress={onAddToBookmarks}>
        <Image source={icons.star} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
