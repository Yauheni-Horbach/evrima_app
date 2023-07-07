import React from 'react';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  Events,
  useClearEventName,
  useSignUpUser,
  useUserStore,
} from '@store/user';

export const useRegistration = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signUpUser = useSignUpUser();
  const {error, loading, eventName} = useUserStore();
  const clearEventName = useClearEventName();

  const navigation = useNavigation<NavigationProp<'Registration'>>();

  const onRegisterPress = () => {
    signUpUser({
      name,
      email,
      password,
    });
  };

  React.useEffect(() => {
    if (eventName === Events.SIGN_UP_USER) {
      navigation.navigate('Personalization');
      clearEventName();
    }
  }, [eventName]);

  const onChangeName = (text: string) => {
    setName(text);
  };

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  return {
    onRegisterPress,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    name,
    email,
    password,
    errorText: error,
    isLoading: loading,
  };
};
