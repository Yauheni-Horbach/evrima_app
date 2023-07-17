import React from 'react';
import * as Redux from 'react-redux';

import {UpdateEmailByPostParams} from '../../../api/Auth';
import {AppDispatch} from '../../index';
import {fetchUpdateEmail} from '../extraReducers';

export const useUpdateEmail = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: UpdateEmailByPostParams) => {
      dispatch(fetchUpdateEmail(params));
    },
    [dispatch],
  );
};
