import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {clearEventName} from '../slice';

export const useClearEventName = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(() => {
    dispatch(clearEventName());
  }, [dispatch]);
};
