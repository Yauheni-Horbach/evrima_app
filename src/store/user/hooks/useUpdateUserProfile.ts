import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {fetchUpdateUserProfile} from '../extraReducers';
import {AppDispatch} from '../../index';
import {UpdateUserParams} from '../../../api/User';

export const useUpdateUserProfile = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(
    (id: string, params: UpdateUserParams) => {
      dispatch(fetchUpdateUserProfile({id, params}));
    },
    [dispatch],
  );
};
