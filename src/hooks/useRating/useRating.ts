import React from 'react';

export const useRating = () => {
  const [rating, setRating] = React.useState<null | number>(null);

  const onSetRating = (rating: number | null) => {
    setRating(rating);
  };

  return {
    onSetRating,
    rating,
  };
};
