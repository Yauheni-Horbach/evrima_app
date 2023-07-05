import {ReactNode} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {styles} from './styles';

interface ScreenWrapperProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ScreenWrapper = ({
  children,
  style: propsStyles,
}: ScreenWrapperProps) => {
  return <View style={[styles.wrapper, propsStyles]}>{children}</View>;
};
