import {createSlice} from '@reduxjs/toolkit';

import {User} from '../storeNames';

import {InitialState} from './types';

const initialState = {
  data: {
    currentSearchResultProduct: {},
  },
  loading: false,
  error: null,
  eventName: null,
} as InitialState;

const searchSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    clearSearchStore: () => {
      return initialState;
    },
    setSearchResultProduct: (state, action) => {
      state.data.currentSearchResultProduct = action.payload;
    },
  },
});

export const {clearSearchStore, setSearchResultProduct} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
