import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

import {postSignUp} from '../../api/Auth';
import {useAddToken} from '../../store/config';
import {useAddUserId} from '../../store/user';

export const useRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const addToken = useAddToken();
  const addUserId = useAddUserId();

  const navigation = useNavigation<NavigationProp<'Registration'>>();

  const handleRegisterPress = () => {
    postSignUp({
      name,
      email,
      password,
    }).then(response => {
      if ('isError' in response) {
        setErrorText(response.message);

        return;
      }

      addToken({token: response.token});
      addUserId({id: response.id});

      navigation.navigate('Personalization');
    });
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
    errorText,
  };
};
