import * as React from 'react';
import * as Redux from 'react-redux';

import {addUserId} from '../slice';

export const useAddUserId = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (params: {id: string}) => {
      dispatch(addUserId(params));
    },
    [dispatch],
  );
};
