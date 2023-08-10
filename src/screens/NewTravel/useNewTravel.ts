import React from 'react';
import {NavigationProp} from '@navigation/types';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  useClearCurrentTravelStore,
  useCreateTravel,
} from '@store/currentTravel';
import {useUserStore} from '@store/user';

export const useNewTravel = () => {
  const navigation = useNavigation<NavigationProp<'NewTravel'>>();

  const clearCurrentTravelStore = useClearCurrentTravelStore();
  const createTravel = useCreateTravel();

  const {data} = useUserStore();

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

    createTravel(data.id, profileData).then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'CurrentTravelNavigator'}],
        }),
      );
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
