import React from 'react';
import * as Redux from 'react-redux';

import {SignUpUserByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';
import {fetchSignUpUser} from '../extraReducers';

export const useSignUpUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: SignUpUserByPostParams) => {
      dispatch(fetchSignUpUser(params));
    },
    [dispatch],
  );
};
