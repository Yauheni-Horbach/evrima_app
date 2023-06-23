import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';
import {
  useSignUpUser,
  useUserStore,
  Events,
  useClearEventName,
} from '@store/user';

export const useRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = useSignUpUser();
  const {error, loading, eventName} = useUserStore();
  const clearEventName = useClearEventName();

  const navigation = useNavigation<NavigationProp<'Registration'>>();

  const handleRegisterPress = () => {
    signUpUser({
      name,
      email,
      password,
    });
  };

  useEffect(() => {
    if (eventName === Events.SIGN_UP_USER) {
      navigation.navigate('Personalization');
      clearEventName();
    }
  }, [eventName]);

  const changeName = (text: string) => {
    setName(text);
  };

  const changeEmail = (text: string) => {
    setEmail(text);
  };

  const changePassword = (text: string) => {
    setPassword(text);
  };

  return {
    onRegisterPress: handleRegisterPress,
    onChangeName: changeName,
    onChangeEmail: changeEmail,
    onChangePassword: changePassword,
    name,
    email,
    password,
    errorText: error,
    isLoading: loading,
  };
};
