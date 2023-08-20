import React from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '@ui/colors';

import {styles} from './styles';
import {useWelcome} from './useWelcome';

const laps = [
  {size: 1000, color: colors.majorelle, duration: 5000},
  {size: 700, color: colors.mauve, duration: 4000},
  {size: 400, color: colors.periwinkle, duration: 6000},
  {size: 200, color: colors.mauve2, duration: 3500},
  {size: 100, color: colors.seasalt, duration: 4500},
];

const Lap = ({
  size,
  color,
  duration,
  startNavigation,
}: {
  size: number;
  color: string;
  duration: number;
  startNavigation: boolean;
}) => {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);

  const lapStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}, {scale: scale.value}],
      position: 'absolute',
      borderRadius: 10,
    };
  });

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(180, {duration, easing: Easing.linear}),
      -1,
    );
  }, []);

  useAnimatedReaction(
    () => {
      if (startNavigation) {
        scale.value = withTiming(10, {
          duration: 500,
          easing: Easing.ease,
        });
      }
    },
    () => {},
    [startNavigation],
  );

  return (
    <Animated.View
      style={[lapStyle, {width: size, height: size, backgroundColor: color}]}
    />
  );
};

export const Welcome = () => {
  const {onBackgroundPress, startNavigation} = useWelcome();

  return (
    <Pressable onPress={onBackgroundPress} style={styles.container}>
      {laps.map((lap, index) => (
        <Lap
          key={index}
          size={lap.size}
          color={lap.color}
          duration={lap.duration}
          startNavigation={startNavigation}
        />
      ))}
      <Text style={styles.text}>EVRIMA</Text>
    </Pressable>
  );
};
