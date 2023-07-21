import React from 'react';
import * as Redux from 'react-redux';
import type {PlaceItem} from '@api/types';

import {AppDispatch} from '../../index';
import {updatePlacesList} from '../slice';

export const useUpdatePlacesList = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: {placesList: PlaceItem[]}) => {
      dispatch(updatePlacesList(payload));
    },
    [dispatch],
  );
};
