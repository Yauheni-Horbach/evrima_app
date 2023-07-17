import React from 'react';
import * as Redux from 'react-redux';

import {UpdatePasswordByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';
import {fetchUpdatePassword} from '../extraReducers';

export const useUpdatePassword = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: UpdatePasswordByPostParams) => {
      dispatch(fetchUpdatePassword(params));
    },
    [dispatch],
  );
};
