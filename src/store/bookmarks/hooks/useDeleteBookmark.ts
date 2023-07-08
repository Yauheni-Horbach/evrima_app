import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {deleteBookmark} from '../slice';

export const useDeleteBookmark = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {fsq_id: string}) => {
      dispatch(deleteBookmark(payload));
    },
    [dispatch],
  );
};
