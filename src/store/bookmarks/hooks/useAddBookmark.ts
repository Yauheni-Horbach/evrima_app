import React from 'react';
import * as Redux from 'react-redux';
import type {PlaceItem} from '@api/types';

import {AppDispatch} from '../../index';
import {addBookmark} from '../slice';

export const useAddBookmark = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: PlaceItem) => {
      dispatch(addBookmark(payload));
    },
    [dispatch],
  );
};
