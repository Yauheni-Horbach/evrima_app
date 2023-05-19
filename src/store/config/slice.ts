import {createSlice} from '@reduxjs/toolkit';
import {CONFIG} from '../storeNames';
import {InitialState} from './types';

const initialState = {
  token: '',
} as InitialState;

const configSlice = createSlice({
  name: CONFIG,
  initialState,
  reducers: {},
});

export const {} = configSlice.actions;
export const configReducer = configSlice.reducer;
