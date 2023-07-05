import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useHome} from './useHome';
import {styles} from './styles';
import {ScreenWrapper} from '@components/ScreenWrapper';

const SquareButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Home = () => {
  const {buttons} = useHome();

  return (
    <ScreenWrapper style={styles.container}>
      {buttons.map((button, index) => (
        <SquareButton
          key={index}
          title={button.title}
          onPress={button.onPress}
        />
      ))}
    </ScreenWrapper>
  );
};
