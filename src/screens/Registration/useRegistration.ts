import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export const useRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<'Registration'>>();

  const handleRegisterPress = () => {
    // Handle the registration logic
    console.log('Register pressed');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Onboarding');
  };

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
  };
};
