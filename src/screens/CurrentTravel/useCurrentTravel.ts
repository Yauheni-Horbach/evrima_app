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

  const [directions, setDirections] = React.useState({
    origin: null,
    destination: null,
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

    setDirections({
      ...directions,
      origin: {
        latitude,
        longitude,
      },
    });
  };

  const onPressInPlace = place => {
    setDirections({
      ...directions,
      destination: {
        latitude: place.geocodes.main.latitude,
        longitude: place.geocodes.main.longitude,
      },
    });
  };

  return {
    isLoading: false,
    errorText: '',
    directions,
    currentTravelData: data,
    likeList: data.likeList,
    startTravelLocation,
    onLongPress,
    onPressInPlace,
  };
};
