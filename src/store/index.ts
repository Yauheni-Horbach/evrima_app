import {configureStore} from '@reduxjs/toolkit';

import {bookmarksReducer} from './bookmarks';
import {configReducer} from './config';
import {currentTravelReducer} from './currentTravel';
import {searchReducer} from './search';
import {userReducer} from './user';

const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
    currentTravel: currentTravelReducer,
    bookmarks: bookmarksReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
