import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {setSearchResultProduct} from '../slice';

export const useSetSearchResultProduct = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: any) => {
      dispatch(setSearchResultProduct(payload));
    },
    [dispatch],
  );
};
