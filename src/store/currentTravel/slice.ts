import type {PlaceItem} from '@api/types';
import {createSlice} from '@reduxjs/toolkit';

import {User} from '../storeNames';

import {createTravelExtraReducer} from './extraReducers';
import {InitialState} from './types';

const removeDuplicateElements = (
  newArray: PlaceItem[],
  currentArray: PlaceItem[],
) => {
  const idSet = new Set(currentArray.map(item => item.fsq_id));
  return newArray.filter(item => !idSet.has(item.fsq_id));
};

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
    visitedPlaces: [],
    currentCoordinates: null,
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
      const newElements = removeDuplicateElements(
        action.payload.placesList,
        state.data.placesList,
      );

      state.data.placesList = [...state.data.placesList, ...newElements];
    },
    filterPlacesList: state => {
      const newElements = removeDuplicateElements(state.data.placesList, [
        ...state.data.dislikeList,
        ...state.data.likeList,
      ]);

      state.data.placesList = newElements;
    },
    deleteItemFromLikeList: (state, action) => {
      const newArray = state.data.likeList.filter(
        item => item.fsq_id !== action.payload.fsq_id,
      );
      state.data.likeList = newArray;
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
    addIdToVisitedPlaces: (state, action) => {
      state.data.visitedPlaces.push(action.payload.fsq_id);
    },
  },
  extraReducers: builder => {
    createTravelExtraReducer(builder);
  },
});

export const {
  clearCurrentTravelStore,
  updateCurrentTravel,
  addPlaceToViewedListWithPlaceState,
  updatePlacesList,
  filterPlacesList,
  deleteItemFromLikeList,
  addIdToVisitedPlaces,
} = currentTravelSlice.actions;
export const currentTravelReducer = currentTravelSlice.reducer;
