import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

type TabProps = {
  key: string;
  onPress: () => void;
  label: string;
  isMainTab?: boolean;
  isFocused?: boolean;
};

export const Tab: React.FC<TabProps> = ({
  key,
  onPress,
  isMainTab,
  isFocused,
  label,
}) => {
  return (
    <>
      <TouchableOpacity
        key={key}
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
