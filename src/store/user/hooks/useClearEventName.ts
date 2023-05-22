import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {clearEventName} from '../slice';
import {AppDispatch} from '../../index';

export const useClearEventName = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(() => {
    dispatch(clearEventName());
  }, [dispatch]);
};
