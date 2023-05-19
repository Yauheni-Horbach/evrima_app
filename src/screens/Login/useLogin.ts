import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {useState} from 'react';

import {getLogin} from '../../api/Auth';
import {useAddToken} from '../../store/config';
import {useAddUserId} from '../../store/user';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const addToken = useAddToken();
  const addUserId = useAddUserId();

  const navigation = useNavigation<NavigationProp<'Login'>>();

  const handleLoginPress = () => {
    getLogin({
      email,
      password,
    }).then(response => {
      console.log(response);

      if ('isError' in response) {
        setErrorText(response.message);

        return;
      }

      addToken({token: response.token});
      addUserId({id: response.id});

      navigation.navigate('Home');
    });
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
    errorText,
  };
};
