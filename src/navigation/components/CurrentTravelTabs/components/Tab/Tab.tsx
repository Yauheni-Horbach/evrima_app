import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type TabProps = {
  onPress: () => void;
  label: string;
  isMainTab?: boolean;
  isFocused?: boolean;
};

export const Tab: React.FC<TabProps> = ({
  onPress,
  isMainTab,
  isFocused,
  label,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          isMainTab && styles.mainButton,
          isFocused && styles.activeTabButton,
        ]}>
        <Text style={[styles.buttonText, isMainTab && styles.mainButtonText]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
};
