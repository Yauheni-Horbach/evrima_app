import React from 'react';
import * as Redux from 'react-redux';
import type {PlaceItem} from '@api/types';

import {AppDispatch} from '../../index';
import {setSearchResultProduct} from '../slice';

export const useSetSearchResultProduct = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: PlaceItem) => {
      dispatch(setSearchResultProduct(payload));
    },
    [dispatch],
  );
};
