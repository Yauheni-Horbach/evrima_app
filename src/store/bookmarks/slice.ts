import {createSlice} from '@reduxjs/toolkit';

import {User} from '../storeNames';

import {InitialState} from './types';

const initialState = {
  data: {
    bookmarksList: [],
  },
  loading: false,
  error: null,
  eventName: null,
} as InitialState;

const bookmarksSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    clearBookmarksStore: () => {
      return initialState;
    },
    addBookmark: (state, action) => {
      state.data.bookmarksList.push(action.payload);
    },
    deleteBookmark: (state, action) => {
      const updatedItems = state.data.bookmarksList.filter(
        item => item.fsq_id !== action.payload.fsq_id,
      );

      state.data.bookmarksList = updatedItems;
    },
  },
});

export const {clearBookmarksStore, addBookmark, deleteBookmark} =
  bookmarksSlice.actions;
export const bookmarksReducer = bookmarksSlice.reducer;
