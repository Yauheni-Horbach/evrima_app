import * as React from 'react';
import * as Redux from 'react-redux';
import {fetchSignUpUser} from '../slice';
import {SignUpUserByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';

export const useSignUpUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: SignUpUserByPostParams) => {
      dispatch(fetchSignUpUser(params));
    },
    [dispatch],
  );
};
