import React from 'react';
import * as Redux from 'react-redux';

import {UpdateUserParams} from '../../../api/User';
import {AppDispatch} from '../../index';
import {fetchUpdateUserProfile} from '../extraReducers';

export const useUpdateUserProfile = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (id: string, params: UpdateUserParams) => {
      dispatch(fetchUpdateUserProfile({id, params}));
    },
    [dispatch],
  );
};
