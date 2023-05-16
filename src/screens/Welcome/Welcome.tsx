import {Text, Pressable} from 'react-native';
import {useWelcome} from './useWelcome';
import {styles} from './styles';

export const Welcome = () => {
  const {onBackgroundPress} = useWelcome();

  return (
    <Pressable onPress={onBackgroundPress} style={styles.container}>
      <Text>Welcome</Text>
    </Pressable>
  );
};
