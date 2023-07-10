import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {addPlaceToViewedListWithPlaceState} from '../slice';

export const useAddPlaceToViewedListWithPlaceState = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {place: any; placeState: 'like' | 'dislike'}) => {
      dispatch(addPlaceToViewedListWithPlaceState(payload));
    },
    [dispatch],
  );
};
