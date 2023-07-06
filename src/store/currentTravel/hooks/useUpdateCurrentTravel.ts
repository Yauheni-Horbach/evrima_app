import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {updateCurrentTravel} from '../slice';
import {AppDispatch} from '../../index';
import {DataUser} from '../types';

export const useUpdateCurrentTravel = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(
    (payload: Partial<DataUser>) => {
      dispatch(updateCurrentTravel(payload));
    },
    [dispatch],
  );
};
