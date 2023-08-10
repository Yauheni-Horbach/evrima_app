import React from 'react';
import * as Redux from 'react-redux';

import {CreateTravelParams} from '../../../api/User';
import {AppDispatch} from '../../index';
import {createTravel} from '../extraReducers';

export const useCreateTravel = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    async (id: string, params: CreateTravelParams) => {
      await dispatch(
        createTravel({
          id,
          params,
        }),
      );
    },
    [dispatch],
  );
};
