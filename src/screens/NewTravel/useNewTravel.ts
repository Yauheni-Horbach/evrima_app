import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';

export const useNewTravel = () => {
  const navigation = useNavigation<NavigationProp<'NewTravel'>>();

  const [profileData, setProfileData] = useState({
    name: '',
    location: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const handleStartPress = () => {
    navigation.navigate('CurrentTravel');
  };

  const handleInputChange = (
    field: string,
    value: string | {lat: number; lng: number},
  ) => {
    setProfileData({...profileData, [field]: value});
  };

  return {
    onStartPress: handleStartPress,
    onInputChange: handleInputChange,
    profileData,
    isLoading: false,
    errorText: '',
  };
};
