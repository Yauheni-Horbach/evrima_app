import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../../index';
import {updateCurrentTravel} from '../slice';
import {DataUser} from '../types';

export const useUpdateCurrentTravel = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: Partial<DataUser>) => {
      dispatch(updateCurrentTravel(payload));
    },
    [dispatch],
  );
};
