import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {deletePlaceFromTravelItem} from '../extraReducers';

export const useDeleteItemFromLikeList = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {id: string; travelId: string; placeId: string}) => {
      dispatch(deletePlaceFromTravelItem(payload));
    },
    [dispatch],
  );
};
