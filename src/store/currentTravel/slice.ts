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
    placesList: [],
  },
  loading: false,
  error: null,
  eventName: null,
} as InitialState;

const currentTravelSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    clearCurrentTravelStore: () => {
      return initialState;
    },
    updateCurrentTravel: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    changePlaceState: (state, action) => {
      state.data = {
        ...state.data,
        placesList: state.data.placesList.map(item => {
          if (item.fsq_id === action.payload.fsq_id) {
            return {
              ...item,
              ...action.payload,
              placeState: action.payload.placeState,
            };
          }
          return item;
        }),
      };
    },
  },
});

export const {clearCurrentTravelStore, updateCurrentTravel, changePlaceState} =
  currentTravelSlice.actions;
export const currentTravelReducer = currentTravelSlice.reducer;
