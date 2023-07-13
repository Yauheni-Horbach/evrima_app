import React from 'react';
import {
  useClearCurrentTravelStore,
  useCurrentTravelStore,
  useUpdateCurrentTravel,
} from '@store/currentTravel';

export const useSettingsCurrentTravel = () => {
  const updateCurrentTravel = useUpdateCurrentTravel();
  const clearCurrentTravelStore = useClearCurrentTravelStore();
  const {data} = useCurrentTravelStore();

  const [profileData, setProfileData] = React.useState({
    name: data.name,
    startDate: data.startDate,
    endDate: data.endDate,
  });

  const onStartPress = () => {
    clearCurrentTravelStore();
    updateCurrentTravel({
      ...profileData,
    });
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
