import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {addBookmark} from '../slice';

export const useAddBookmark = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: any) => {
      dispatch(addBookmark(payload));
    },
    [dispatch],
  );
};
