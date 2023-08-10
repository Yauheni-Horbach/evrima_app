import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useHome} from './useHome';

const SquareButton = ({
  title,
  onPress,
  disabled,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Home = () => {
  const {buttons, isLoading} = useHome();

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <ScreenWrapper style={styles.container}>
          {buttons.map(button => (
            <SquareButton
              key={button.title}
              disabled={button.disabled}
              title={button.title}
              onPress={button.onPress}
            />
          ))}
        </ScreenWrapper>
      )}
    </>
  );
};
