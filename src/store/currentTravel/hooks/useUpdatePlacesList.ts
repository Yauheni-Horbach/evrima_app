import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {updatePlacesList} from '../slice';

export const useUpdatePlacesList = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {placesList: any[]}) => {
      dispatch(updatePlacesList(payload));
    },
    [dispatch],
  );
};
