import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {fetchGetUserProfile} from '../extraReducers';

export const useGetUserProfile = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (id: string) => {
      dispatch(fetchGetUserProfile(id));
    },
    [dispatch],
  );
};
