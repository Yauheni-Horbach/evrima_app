import {createSlice} from '@reduxjs/toolkit';
import {User} from '../storeNames';
import {InitialState} from './types';

const initialState = {
  data: {
    id: '',
    name: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
    location: '',
  },
  loading: false,
  error: null,
  eventName: null,
} as InitialState;

const currentTravelSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    clearEventName: state => {
      state.eventName = null;
    },
  },
});

export const {clearEventName} = currentTravelSlice.actions;
export const currentTravelReducer = currentTravelSlice.reducer;
