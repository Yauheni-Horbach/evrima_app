import {useCallback} from 'react';
import * as Redux from 'react-redux';
import {changePlaceState} from '../slice';
import {AppDispatch} from '../../index';

export const useChangePlaceState = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return useCallback(
    (payload: {place_id: string; placeState: 'like' | 'dislike'}) => {
      dispatch(changePlaceState(payload));
    },
    [dispatch],
  );
};
