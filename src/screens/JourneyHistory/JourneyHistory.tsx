import React from 'react';
import {Pressable, Text} from 'react-native';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useJourneyHistory} from './useJourneyHistory';

export const JourneyHistory = () => {
  const {travelList, currentTravelId, onPressItem} = useJourneyHistory();

  return (
    <ScreenWrapper style={styles.container}>
      {Object.keys(travelList).map(value => {
        return (
          <Pressable
            key={value}
            style={[
              styles.button,
              value === currentTravelId && styles.disabledButton,
            ]}
            disabled={value === currentTravelId}
            onPress={() => onPressItem(value)}>
            <Text style={styles.buttonText}>{travelList[value].name}</Text>
            <Text style={styles.buttonText}>{travelList[value].location}</Text>
          </Pressable>
        );
      })}
    </ScreenWrapper>
  );
};
