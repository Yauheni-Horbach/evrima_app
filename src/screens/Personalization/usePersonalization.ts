import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export const usePersonalization = () => {
  const [profileData, setProfileData] = useState({
    surName: '',
    sex: '',
    birthDate: '',
    location: '',
    avatar: '',
  });

  const navigation = useNavigation<NavigationProp<'Personalization'>>();

  const handleSavePress = () => {
    navigation.navigate('Onboarding');
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData({...profileData, [field]: value});
  };

  return {
    onSavePress: handleSavePress,
    onInputChange: handleInputChange,
    profileData,
  };
};
