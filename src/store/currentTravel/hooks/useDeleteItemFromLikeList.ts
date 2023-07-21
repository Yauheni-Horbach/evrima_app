import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {deleteItemFromLikeList} from '../slice';

export const useDeleteItemFromLikeList = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {fsq_id: string}) => {
      dispatch(deleteItemFromLikeList(payload));
    },
    [dispatch],
  );
};
