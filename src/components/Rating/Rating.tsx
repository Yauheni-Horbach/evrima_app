import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

import {styles} from './styles';

interface RatingProps {
  rating: number;
  onSetRating: (value: number) => void;
  defaultRating: number;
}

export const Rating = ({rating, onSetRating, defaultRating}: RatingProps) => {
  return (
    <AirbnbRating
      count={10}
      showRating={false}
      size={rating ? 25 : 20}
      ratingContainerStyle={styles.ratingContainer}
      selectedColor={rating ? 'red' : 'orange'}
      onFinishRating={value => {
        onSetRating(value);
      }}
      defaultRating={defaultRating}
    />
  );
};
