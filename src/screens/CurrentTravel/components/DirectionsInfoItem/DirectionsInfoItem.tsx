import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

export const DirectionsInfoItem = ({
  title,
  value,
}: {
  title: string;
  value: string | null;
}) => (
  <Text style={styles.directionsInfoItem} numberOfLines={1}>
    {title} - {value}
  </Text>
);
