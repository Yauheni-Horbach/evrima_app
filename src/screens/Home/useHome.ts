import React from 'react';
import {NavigationProp} from '@navigation/types';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useUpdateCurrentTravel} from '@store/currentTravel';
import {useGetUserProfile, useUserStore} from '@store/user';

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<'Home'>>();

  const {loading, data: userData} = useUserStore();
  const getUserProfile = useGetUserProfile();
  const updateCurrentTravel = useUpdateCurrentTravel();

  React.useEffect(() => {
    getUserProfile(userData.id);
  }, []);

  return {
    isLoading: loading,
    buttons: [
      {
        title: 'Creating Journey',
        onPress: () => navigation.navigate('NewTravel'),
      },
      {
        title: 'Current Journey',
        onPress: () => {
          updateCurrentTravel(userData.travelList[userData.currentTravelId]);

          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'CurrentTravelNavigator'}],
            }),
          );
        },
        disabled: !userData.currentTravelId,
      },
      {
        title: 'Journey history',
        onPress: () => navigation.navigate('JourneyHistory'),
      },
      {title: 'Settings', onPress: () => navigation.navigate('Settings')},
      {
        title: 'Search',
        onPress: () => {
          navigation.navigate('Search');
        },
        disabled: true,
      },
      {
        title: 'Bookmarks',
        onPress: () => navigation.navigate('Bookmarks'),
        disabled: true,
      },
    ],
  };
};
