import React from 'react';
import {Marker} from 'react-native-maps';
import {PlaceItem} from '@api/types';

export const MarkerItem = ({
  item,
  pinColor,
  onCalloutPress,
}: {
  item: PlaceItem;
  pinColor: string;
  onCalloutPress: () => void;
}) => {
  return (
    <Marker
      key={item.fsq_id}
      pinColor={pinColor}
      coordinate={{
        latitude: item.geocodes.main.latitude,
        longitude: item.geocodes.main.longitude,
      }}
      title={item.name}
      onCalloutPress={onCalloutPress}
    />
  );
};
