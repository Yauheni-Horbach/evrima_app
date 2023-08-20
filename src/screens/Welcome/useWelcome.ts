import React from 'react';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useWelcome = () => {
  const navigation = useNavigation<NavigationProp<'Welcome'>>();
  const [startNavigation, setStartNavigation] = React.useState(false);

  const onBackgroundPress = () => {
    setStartNavigation(true);
    navigation.navigate('Auth');
  };

  return {
    onBackgroundPress,
    startNavigation,
  };
};
