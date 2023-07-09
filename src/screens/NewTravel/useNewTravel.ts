import React from 'react';
import uuid from 'react-native-uuid';
import {NavigationProp} from '@navigation/types';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  useClearCurrentTravelStore,
  useUpdateCurrentTravel,
} from '@store/currentTravel';

export const useNewTravel = () => {
  const navigation = useNavigation<NavigationProp<'NewTravel'>>();

  const updateCurrentTravel = useUpdateCurrentTravel();
  const clearCurrentTravelStore = useClearCurrentTravelStore();

  const [profileData, setProfileData] = React.useState({
    name: '',
    location: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
    radius: 2000,
    startDate: '',
    endDate: '',
  });

  const onStartPress = () => {
    clearCurrentTravelStore();
    updateCurrentTravel({
      id: `${uuid.v4()}`,
      ...profileData,
    });

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'CurrentTravelNavigator'}],
      }),
    );
  };

  const onInputChange = (
    field: string,
    value: string | {lat: number; lng: number} | number,
  ) => {
    setProfileData(prevTodos => ({...prevTodos, [field]: value}));
  };

  return {
    onStartPress,
    onInputChange,
    profileData,
    isLoading: false,
    errorText: '',
  };
};
