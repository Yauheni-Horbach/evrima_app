import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useHome} from './useHome';
import {styles} from './styles';

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
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <SquareButton
          key={index}
          title={button.title}
          onPress={button.onPress}
        />
      ))}
    </View>
  );
};
