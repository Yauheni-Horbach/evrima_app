import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {useState, useEffect} from 'react';
import {useFetchLoginUser, useUserStore} from '../../store/user';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, loading, data} = useUserStore();

  const fetchLoginUser = useFetchLoginUser();

  const navigation = useNavigation<NavigationProp<'Login'>>();

  const handleLoginPress = () => {
    fetchLoginUser({
      email,
      password,
    });
  };

  useEffect(() => {
    if (data.id) {
      navigation.navigate('Home');
    }
  }, [data, navigation]);

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
    loading,
  };
};
