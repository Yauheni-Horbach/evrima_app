import {createSlice} from '@reduxjs/toolkit';
import {CONFIG} from '../storeNames';
import {InitialState} from './types';

const initialState = {
  id: '',
} as InitialState;

const userSlice = createSlice({
  name: CONFIG,
  initialState,
  reducers: {
    addUserId: (state, {payload}: {payload: {id: string}}) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const {addUserId} = userSlice.actions;
export const userReducer = userSlice.reducer;
