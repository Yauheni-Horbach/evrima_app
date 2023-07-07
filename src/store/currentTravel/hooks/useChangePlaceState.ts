import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {changePlaceState} from '../slice';

export const useChangePlaceState = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {place_id: string; placeState: 'like' | 'dislike'}) => {
      dispatch(changePlaceState(payload));
    },
    [dispatch],
  );
};
