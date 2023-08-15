import React from 'react';
import * as Redux from 'react-redux';
import {EstimatePlace} from '@api/User';

import {AppDispatch} from '../../index';
import {estimatePlace} from '../extraReducers';
import {addPlaceToViewedListWithPlaceState} from '../slice';

export const useAddPlaceToViewedListWithPlaceState = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (id: string, payload: EstimatePlace) => {
      dispatch(estimatePlace({id, params: payload}));
      dispatch(addPlaceToViewedListWithPlaceState(payload));
    },
    [dispatch],
  );
};
