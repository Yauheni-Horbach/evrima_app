import {createSlice} from '@reduxjs/toolkit';
import {CONFIG} from '../storeNames';
import {InitialState} from './types';

const initialState = {} as InitialState;

const configSlice = createSlice({
  name: CONFIG,
  initialState,
  reducers: {
    addToken: state => {
      return state;
    },
  },
});

export const {addToken} = configSlice.actions;
export const configReducer = configSlice.reducer;
