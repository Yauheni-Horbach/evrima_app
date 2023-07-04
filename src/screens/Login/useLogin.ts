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

  const onLoginPress = () => {
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

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  return {
    onLoginPress,
    onChangeEmail,
    onChangePassword,
    email,
    password,
    errorText: error,
    isLoading: loading,
  };
};
