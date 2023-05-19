import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {useSignUpUser, useUserStore} from '../../store/user';

export const useRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = useSignUpUser();
  const {error, loading, data} = useUserStore();

  const navigation = useNavigation<NavigationProp<'Registration'>>();

  const handleRegisterPress = () => {
    signUpUser({
      name,
      email,
      password,
    });
  };

  useEffect(() => {
    if (data.id) {
      navigation.navigate('Personalization');
    }
  }, [data, navigation]);

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
    loading,
  };
};
