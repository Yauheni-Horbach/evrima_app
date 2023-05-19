import {useSelector} from 'react-redux';
import type {RootState} from '../..';
import type {InitialState} from '../types';

export const useUserStore = () => {
  return useSelector<RootState, InitialState>(state => state.user);
};
