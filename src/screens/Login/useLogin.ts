import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  Events,
  useClearEventName,
  useFetchLoginUser,
  useUserStore,
} from '@store/user';
import {useEffect, useState} from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, loading, eventName} = useUserStore();
  const clearEventName = useClearEventName();

  const fetchLoginUser = useFetchLoginUser();

  const navigation = useNavigation<NavigationProp<'Login'>>();

  const handleLoginPress = () => {
    fetchLoginUser({
      email,
      password,
    });
  };

  useEffect(() => {
    if (eventName === Events.LOGIN_USER) {
      navigation.reset({
        routes: [{name: 'Home'}],
      });
      clearEventName();
    }
  }, [eventName]);

  const changeEmail = (text: string) => {
    setEmail(text);
  };

  const changePassword = (text: string) => {
    setPassword(text);
  };

  return {
    onLoginPress: handleLoginPress,
    onChangeEmail: changeEmail,
    onChangePassword: changePassword,
    email,
    password,
    errorText: error,
    isLoading: loading,
  };
};
