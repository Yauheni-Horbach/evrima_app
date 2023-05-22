import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {fetchSignUpUser} from '../extraReducers';
import {SignUpUserByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';

export const useSignUpUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(
    (params: SignUpUserByPostParams) => {
      dispatch(fetchSignUpUser(params));
    },
    [dispatch],
  );
};
