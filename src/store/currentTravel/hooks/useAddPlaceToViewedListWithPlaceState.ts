import React from 'react';
import * as Redux from 'react-redux';
import type {PlaceItem} from '@api/types';

import {AppDispatch} from '../../index';
import {addPlaceToViewedListWithPlaceState} from '../slice';

export const useAddPlaceToViewedListWithPlaceState = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {place: PlaceItem; placeState: 'like' | 'dislike'}) => {
      dispatch(addPlaceToViewedListWithPlaceState(payload));
    },
    [dispatch],
  );
};
