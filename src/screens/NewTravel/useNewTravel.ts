import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';
import {
  useUpdateCurrentTravel,
  useClearCurrentTravelStore,
} from '@store/currentTravel';
import uuid from 'react-native-uuid';

export const useNewTravel = () => {
  const navigation = useNavigation<NavigationProp<'NewTravel'>>();

  const updateCurrentTravel = useUpdateCurrentTravel();
  const clearCurrentTravelStore = useClearCurrentTravelStore();

  const [profileData, setProfileData] = useState({
    name: '',
    location: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const onStartPress = () => {
    clearCurrentTravelStore();
    updateCurrentTravel({
      id: `${uuid.v4()}`,
      ...profileData,
    });
    navigation.navigate('CurrentTravelNavigator');
  };

  const onInputChange = (
    field: string,
    value: string | {lat: number; lng: number},
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
