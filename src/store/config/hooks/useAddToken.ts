import * as React from 'react';
import * as Redux from 'react-redux';

import {addToken} from '../slice';

export const useAddToken = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (params: {token: string}) => {
      dispatch(addToken(params));
    },
    [dispatch],
  );
};
