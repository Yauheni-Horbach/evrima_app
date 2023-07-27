import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {addIdToVisitedPlaces} from '../slice';

export const useAddIdToVisitedPlaces = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {fsq_id: string}) => {
      dispatch(addIdToVisitedPlaces(payload));
    },
    [dispatch],
  );
};
