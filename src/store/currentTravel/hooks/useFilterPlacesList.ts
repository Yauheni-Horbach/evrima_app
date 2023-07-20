import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {filterPlacesList} from '../slice';

export const useFilterPlacesList = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(() => {
    dispatch(filterPlacesList());
  }, [dispatch]);
};
