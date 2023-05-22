import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {fetchLoginUser} from '../extraReducers';
import {LoginUserByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';

export const useFetchLoginUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(
    (params: LoginUserByPostParams) => {
      dispatch(fetchLoginUser(params));
    },
    [dispatch],
  );
};
