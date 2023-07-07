import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './styles';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ScreenWrapper = ({
  children,
  style: propsStyles,
}: ScreenWrapperProps) => {
  return <View style={[styles.wrapper, propsStyles]}>{children}</View>;
};
