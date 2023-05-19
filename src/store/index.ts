import {configureStore} from '@reduxjs/toolkit';
import {configReducer} from './config';
import {userReducer} from './user';

const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
