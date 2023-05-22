import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
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
  const buttons = [
    {
      title: 'Creating Journey',
      onPress: () => console.log('Creating Journey pressed'),
    },
    {
      title: 'Journey history',
      onPress: () => console.log('Journey history pressed'),
    },
    {title: 'Bookmarks', onPress: () => console.log('Bookmarks pressed')},
    {
      title: 'Location rating',
      onPress: () => console.log('Location rating pressed'),
    },
    {title: 'Settings', onPress: () => console.log('Settings pressed')},
    {title: 'Search', onPress: () => console.log('Search pressed')},
  ];

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
