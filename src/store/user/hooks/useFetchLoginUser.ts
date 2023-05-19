import * as React from 'react';
import * as Redux from 'react-redux';
import {fetchLoginUser} from '../slice';
import {LoginUserByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';

export const useFetchLoginUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: LoginUserByPostParams) => {
      dispatch(fetchLoginUser(params));
    },
    [dispatch],
  );
};
