import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';
import {
  useGetUserProfile,
  useUserStore,
  useUpdateUserProfile,
  useClearEventName,
  Events,
} from '@store/user';

const filterEmptyValues = (obj: Record<string, any>) => {
  const filteredEntries = Object.entries(obj).filter(
    ([_, value]) => value !== '',
  );

  return Object.fromEntries(filteredEntries);
};

export const usePersonalization = () => {
  const {error, loading, data, eventName} = useUserStore();
  const getUserProfile = useGetUserProfile();
  const updateUserProfile = useUpdateUserProfile();
  const clearEventName = useClearEventName();

  const navigation = useNavigation<NavigationProp<'Personalization'>>();

  const [profileData, setProfileData] = useState({
    surName: '',
    sex: '',
    birthDate: '',
    location: '',
  });

  useEffect(() => {
    getUserProfile(data.id);
  }, []);

  const onSavePress = () => {
    updateUserProfile(data.id, filterEmptyValues(profileData));
  };

  useEffect(() => {
    if (eventName === Events.UPDATE_USER_PROFILE) {
      navigation.reset({
        routes: [{name: 'Onboarding'}],
      });
      clearEventName();
    }
  }, [eventName]);

  const onInputChange = (field: string, value: string) => {
    setProfileData({...profileData, [field]: value});
  };

  return {
    onSavePress,
    onInputChange,
    profileData,
    isLoading: loading,
    errorText: error,
    data,
  };
};
