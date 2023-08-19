import React from 'react';
import type {PlaceItem} from '@api/types';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  useCurrentTravelStore,
  useDeleteItemFromLikeList,
  useUpdateCurrentTravel,
} from '@store/currentTravel';
import {useUserStore} from '@store/user';

export interface DirectionsState {
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

export interface DirectionsInfoState {
  distance: number | null;
  duration: number | null;
  startAddress: string | null;
  endAddress: string | null;
}

export const useCurrentTravel = () => {
  const {data: currentTravelData} = useCurrentTravelStore();
  const {data: userData} = useUserStore();

  const deleteItemFromLikeList = useDeleteItemFromLikeList();
  const updateCurrentTravel = useUpdateCurrentTravel();

  const navigation = useNavigation<NavigationProp<'CurrentTravel'>>();

  const [doneModal, setDoneModal] = React.useState({
    isModalOpen: false,
    fsq_id: '',
  });

  const changeStateDoneModalOpen = (fsq_id: string) => {
    return () => {
      setDoneModal({
        isModalOpen: !doneModal.isModalOpen,
        fsq_id,
      });
    };
  };

  const [directions, setDirections] = React.useState<DirectionsState>({
    origin: currentTravelData.currentCoordinates?.lat
      ? {
          latitude: currentTravelData.currentCoordinates?.lat,
          longitude: currentTravelData.currentCoordinates?.lng,
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
      deleteItemFromLikeList({
        id: userData.id,
        travelId: currentTravelData.id,
        placeId: fsq_id,
      });

      setDirectionsInfo({
        distance: null,
        duration: null,
        startAddress: null,
        endAddress: null,
      });
    };
  };

  const likeListCategory = React.useMemo(() => {
    return {
      visited: currentTravelData.likeList.filter(item =>
        currentTravelData.visitedPlaces.includes(item.fsq_id),
      ),
      notVisited: currentTravelData.likeList.filter(
        item => !currentTravelData.visitedPlaces.includes(item.fsq_id),
      ),
    };
  }, [currentTravelData.likeList, currentTravelData.visitedPlaces]);

  const directionsInfoData = [
    {
      key: 'duration',
      title: 'Duration',
      value: `${directionsInfo.duration} min`,
    },
    {key: 'startAddress', title: 'Start', value: directionsInfo.startAddress},
    {
      key: 'distance',
      title: 'Distance',
      value: `${directionsInfo.distance} km`,
    },
    {key: 'endAddress', title: 'End', value: directionsInfo.endAddress},
  ];

  return {
    isLoading: false,
    errorText: '',
    directions,
    currentTravelData,
    likeList: likeListCategory.notVisited,
    visitedList: likeListCategory.visited,
    doneModal,
    directionsInfoData,
    changeStateDoneModalOpen,
    onLongPress,
    onPressInPlace,
    onOpenSwipeItemDetails,
    onDeleteItem,
    onChangeDirectionInfo,
  };
};
