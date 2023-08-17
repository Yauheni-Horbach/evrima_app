import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {addIdToVisitedPlaces} from '../extraReducers';

export const useAddIdToVisitedPlaces = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (id: string, params: {currentTravelId: string; id: string}) => {
      dispatch(addIdToVisitedPlaces({id, params}));
    },
    [dispatch],
  );
};
