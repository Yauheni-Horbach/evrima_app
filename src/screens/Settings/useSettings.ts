import React from 'react';
import {
  Events,
  useClearEventName,
  useGetUserProfile,
  useUpdateUserProfile,
  useUserStore,
} from '@store/user';

const filterEmptyValues = (obj: Record<string, any>) => {
  const filteredEntries = Object.entries(obj).filter(
    ([_, value]) => value !== '',
  );

  return Object.fromEntries(filteredEntries);
};

export const useSettings = () => {
  const {error, loading, data, eventName} = useUserStore();
  const getUserProfile = useGetUserProfile();
  const updateUserProfile = useUpdateUserProfile();
  const clearEventName = useClearEventName();

  const [profileData, setProfileData] = React.useState({
    password: '',
    email: '',
    surName: '',
    sex: '',
    birthDate: '',
    location: '',
  });

  React.useEffect(() => {
    getUserProfile(data.id);
  }, []);

  const onSavePress = () => {
    const {email, password, ...profileDataElements} = profileData;

    if (email) {
      console.log(123);
    }

    if (password) {
      console.log(123);
    }

    updateUserProfile(data.id, filterEmptyValues(profileDataElements));
  };

  React.useEffect(() => {
    if (eventName === Events.UPDATE_USER_PROFILE) {
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
