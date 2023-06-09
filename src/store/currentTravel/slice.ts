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
    radius: 2000,
    location: '',
    placesList: [],
    startDate: '',
    endDate: '',
    likeList: [],
    dislikeList: [],
    nextPageLink: '',
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
    updatePlacesList: (state, action) => {
      const removeDuplicateElements = (
        newArray: any[],
        currentArray: any[],
      ) => {
        const idSet = new Set(currentArray.map(item => item.fsq_id));
        return newArray.filter(item => !idSet.has(item.fsq_id));
      };

      const newElements = removeDuplicateElements(
        action.payload.placesList,
        state.data.placesList,
      );

      state.data.placesList = [...state.data.placesList, ...newElements];
    },
    addPlaceToViewedListWithPlaceState: (state, action) => {
      if (action.payload.placeState === 'like') {
        const isAlreadyAdded = state.data.likeList.find(item => {
          return item.fsq_id === action.payload.place.fsq_id;
        });

        if (!isAlreadyAdded) {
          state.data.likeList.push(action.payload.place);
        }
      } else {
        const isAlreadyAdded = state.data.dislikeList.find(item => {
          return item.fsq_id === action.payload.place.fsq_id;
        });

        if (!isAlreadyAdded) {
          state.data.dislikeList.push(action.payload.place);
        }
      }
    },
  },
});

export const {
  clearCurrentTravelStore,
  updateCurrentTravel,
  addPlaceToViewedListWithPlaceState,
  updatePlacesList,
} = currentTravelSlice.actions;
export const currentTravelReducer = currentTravelSlice.reducer;
