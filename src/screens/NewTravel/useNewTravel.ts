import React from 'react';
import {NavigationProp} from '@navigation/types';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  useClearCurrentTravelStore,
  useCreateTravel,
  useCurrentTravelStore,
} from '@store/currentTravel';
import {useUpdateUserLocal, useUserStore} from '@store/user';

export const useNewTravel = () => {
  const navigation = useNavigation<NavigationProp<'NewTravel'>>();

  const clearCurrentTravelStore = useClearCurrentTravelStore();
  const createTravel = useCreateTravel();

  const {data: userData} = useUserStore();
  const {data: currentTravelData} = useCurrentTravelStore();
  const updateUserLocal = useUpdateUserLocal();

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

    createTravel(userData.id, profileData).then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'CurrentTravelNavigator'}],
        }),
      );
      updateUserLocal({currentTravelId: currentTravelData.id});
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
