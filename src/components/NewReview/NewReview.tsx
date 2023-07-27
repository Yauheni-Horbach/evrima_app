import React from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';

interface NewReviewProps {
  ref?: React.LegacyRef<TextInput>;
}

export const NewReview = ({ref}: NewReviewProps) => {
  const [reviewText, setReviewText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={styles.input}
        value={reviewText}
        onChangeText={setReviewText}
        multiline
        placeholder="Write your review"
      />
    </View>
  );
};
