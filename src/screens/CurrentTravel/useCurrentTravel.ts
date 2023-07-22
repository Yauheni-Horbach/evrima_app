import React from 'react';
import type {PlaceItem} from '@api/types';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  useCurrentTravelStore,
  useDeleteItemFromLikeList,
  useUpdateCurrentTravel,
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

interface DirectionsInfoState {
  distance: number | null;
  duration: number | null;
  startAddress: string | null;
  endAddress: string | null;
}

export const useCurrentTravel = () => {
  const {data} = useCurrentTravelStore();

  const deleteItemFromLikeList = useDeleteItemFromLikeList();
  const updateCurrentTravel = useUpdateCurrentTravel();

  const navigation = useNavigation<NavigationProp<'CurrentTravel'>>();

  const [directions, setDirections] = React.useState<DirectionsState>({
    origin: data.currentCoordinates?.lat
      ? {
          latitude: data.currentCoordinates?.lat,
          longitude: data.currentCoordinates?.lng,
          id: 'origin',
        }
      : null,
    destination: null,
  });

  const [directionsInfo, setDirectionsInfo] =
    React.useState<DirectionsInfoState>({
      distance: null,
      duration: null,
      startAddress: null,
      endAddress: null,
    });

  const onLongPress = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    updateCurrentTravel({
      currentCoordinates: {
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

  const onPressInPlace = (place: PlaceItem) => {
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
        subType: 'bookmarks',
      });
    };
  };

  const onChangeDirectionInfo = (info: DirectionsInfoState) => {
    setDirectionsInfo(info);
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

      setDirectionsInfo({
        distance: null,
        duration: null,
        startAddress: null,
        endAddress: null,
      });
    };
  };

  return {
    isLoading: false,
    errorText: '',
    directions,
    currentTravelData: data,
    likeList: data.likeList,
    directionsInfo,
    onLongPress,
    onPressInPlace,
    onOpenSwipeItemDetails,
    onDeleteItem,
    onChangeDirectionInfo,
  };
};
