import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {clearCurrentTravelStore} from '../slice';

export const useClearCurrentTravelStore = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(() => {
    dispatch(clearCurrentTravelStore());
  }, [dispatch]);
};
