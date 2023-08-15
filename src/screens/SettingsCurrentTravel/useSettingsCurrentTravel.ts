import React from 'react';
import {
  useCurrentTravelStore,
  useUpdateCurrentTravel,
} from '@store/currentTravel';

export const useSettingsCurrentTravel = () => {
  const updateCurrentTravel = useUpdateCurrentTravel();
  const {data: currentTravelData} = useCurrentTravelStore();

  const [profileData, setProfileData] = React.useState({
    name: currentTravelData.name,
    startDate: currentTravelData.startDate,
    endDate: currentTravelData.endDate,
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
