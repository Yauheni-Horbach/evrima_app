import React from 'react';
import * as Redux from 'react-redux';

import {LoginUserByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';
import {fetchLoginUser} from '../extraReducers';

export const useFetchLoginUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: LoginUserByPostParams) => {
      dispatch(fetchLoginUser(params));
    },
    [dispatch],
  );
};
