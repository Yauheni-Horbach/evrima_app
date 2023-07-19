import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {clearSearchStore} from '../slice';

export const useClearSearchStore = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(() => {
    dispatch(clearSearchStore());
  }, [dispatch]);
};
