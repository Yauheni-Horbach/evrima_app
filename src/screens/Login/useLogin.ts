import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {useState} from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<'Login'>>();

  const handleLoginPress = () => {
    // Handle the login logic
    console.log('Login pressed');
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

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
  };
};
