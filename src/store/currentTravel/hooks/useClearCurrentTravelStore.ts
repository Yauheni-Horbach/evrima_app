import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {clearCurrentTravelStore} from '../slice';
import {AppDispatch} from '../../index';

export const useClearCurrentTravelStore = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(() => {
    dispatch(clearCurrentTravelStore());
  }, [dispatch]);
};
