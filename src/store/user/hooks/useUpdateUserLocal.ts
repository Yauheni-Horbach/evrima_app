import React from 'react';
import * as Redux from 'react-redux';

import {UserRequestResult} from '../../../api/User';
import {AppDispatch} from '../../index';
import {updateUserLocal} from '../slice';

export const useUpdateUserLocal = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (params: Partial<UserRequestResult>) => {
      dispatch(updateUserLocal(params));
    },
    [dispatch],
  );
};
