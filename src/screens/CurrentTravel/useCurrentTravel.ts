import React from 'react';
import {useCurrentTravelStore} from '@store/currentTravel';

export const useCurrentTravel = () => {
  const {data} = useCurrentTravelStore();

  const [startTravelLocation, setStartTravelLocation] = React.useState({
    id: 'startTravel',
    location: {
      lat: 0,
      lng: 0,
    },
    title: 'Start Travel',
  });

  const onLongPress = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setStartTravelLocation({
      ...startTravelLocation,
      location: {
        lat: latitude,
        lng: longitude,
      },
    });
  };

  return {
    isLoading: false,
    errorText: '',
    currentTravelData: data,
    likeList: data.likeList,
    startTravelLocation,
    onLongPress,
  };
};
