import {useSelector} from 'react-redux';

import type {RootState} from '../..';
import type {InitialState} from '../types';

export const useBookmarksStore = () => {
  return useSelector<RootState, InitialState>(state => state.bookmarks);
};
