import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';

interface ButtonProps extends PressableProps {
  title: string;
  textStyle?: TextStyle;
  style?: ViewStyle | ViewStyle[];
}

export const Button: FC<ButtonProps> = ({
  title,
  textStyle,
  style: pressableStyle,
  ...pressableProps
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.pressable,
        {
          backgroundColor: pressed ? '#3498db' : '#2c3e50',
          opacity: pressed ? 0.8 : 1,
        },
        pressableStyle,
      ]}
      {...pressableProps}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};
