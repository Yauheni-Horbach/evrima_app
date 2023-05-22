import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {fetchGetUserProfile} from '../extraReducers';
import {AppDispatch} from '../../index';

export const useGetUserProfile = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(
    (id: string) => {
      dispatch(fetchGetUserProfile(id));
    },
    [dispatch],
  );
};
