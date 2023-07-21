import React from 'react';
import {
  Events,
  useClearEventName,
  useGetUserProfile,
  useUpdateEmail,
  useUpdatePassword,
  useUpdateUserProfile,
  useUserStore,
} from '@store/user';

const filterEmptyValues = (obj: Record<string, string>) => {
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
  const updateEmail = useUpdateEmail();
  const updatePassword = useUpdatePassword();

  const [profileData, setProfileData] = React.useState({
    password: '',
    newPassword: '',
    email: '',
    surName: '',
    sex: '',
    birthDate: '',
    location: '',
    name: '',
  });

  React.useEffect(() => {
    getUserProfile(data.id);
  }, []);

  const onSavePress = () => {
    const {email, password, newPassword, ...profileDataElements} = profileData;

    if (email) {
      updateEmail({newEmail: email, id: data.id});
    }

    if (password) {
      updatePassword({password, newPassword, id: data.id});
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
