import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {clearBookmarksStore} from '../slice';

export const useClearBookmarksStore = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(() => {
    dispatch(clearBookmarksStore());
  }, [dispatch]);
};
