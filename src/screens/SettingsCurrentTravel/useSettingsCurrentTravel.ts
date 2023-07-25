import React from 'react';
import {
  useCurrentTravelStore,
  useUpdateCurrentTravel,
} from '@store/currentTravel';

export const useSettingsCurrentTravel = () => {
  const updateCurrentTravel = useUpdateCurrentTravel();
  const {data} = useCurrentTravelStore();

  const [profileData, setProfileData] = React.useState({
    name: data.name,
    startDate: data.startDate,
    endDate: data.endDate,
  });

  const onChangePress = () => {
    updateCurrentTravel(profileData);
  };

  const onInputChange = (
    field: string,
    value: string | {lat: number; lng: number} | number,
  ) => {
    setProfileData(prevTodos => ({...prevTodos, [field]: value}));
  };

  return {
    onChangePress,
    onInputChange,
    profileData,
    isLoading: false,
    errorText: '',
  };
};
