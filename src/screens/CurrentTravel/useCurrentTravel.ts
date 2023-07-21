import React from 'react';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  useCurrentTravelStore,
  useDeleteItemFromLikeList,
} from '@store/currentTravel';

interface DirectionsState {
  origin: {
    latitude: number;
    longitude: number;
    id: string;
  } | null;
  destination: {
    latitude: number;
    longitude: number;
    id: string;
  } | null;
}

export const useCurrentTravel = () => {
  const {data} = useCurrentTravelStore();

  const deleteItemFromLikeList = useDeleteItemFromLikeList();

  const navigation = useNavigation<NavigationProp<'CurrentTravel'>>();

  const [startTravelLocation, setStartTravelLocation] = React.useState({
    id: 'startTravel',
    location: {
      lat: 0,
      lng: 0,
    },
    title: 'Start Travel',
  });

  const [directions, setDirections] = React.useState<DirectionsState>({
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
        id: 'origin',
      },
    });
  };

  const onPressInPlace = (place: any) => {
    setDirections({
      ...directions,
      destination: {
        latitude: place.geocodes.main.latitude,
        longitude: place.geocodes.main.longitude,
        id: place.fsq_id,
      },
    });
  };

  const onOpenSwipeItemDetails = (fsq_id: string) => {
    return () => {
      navigation.navigate('ItemDetails', {
        fsq_id,
        type: 'currentTravel',
      });
    };
  };

  const onDeleteItem = (fsq_id: string) => {
    return () => {
      if (directions.destination?.id === fsq_id) {
        setDirections({
          ...directions,
          destination: null,
        });
      }
      if (directions.origin?.id === fsq_id) {
        setDirections({
          ...directions,
          origin: null,
        });
      }
      deleteItemFromLikeList({fsq_id});
    };
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
    onOpenSwipeItemDetails,
    onDeleteItem,
  };
};
