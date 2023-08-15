import {createSlice} from '@reduxjs/toolkit';

import {User} from '../storeNames';

import {
  fetchGetUserProfileExtraReducer,
  fetchLoginUserExtraReducer,
  fetchSignUpUserExtraReducer,
  fetchUpdateEmailExtraReducer,
  fetchUpdatePasswordExtraReducer,
  fetchUpdateUserProfileExtraReducer,
} from './extraReducers';
import {InitialState} from './types';

const initialState = {
  data: {
    id: '',
    name: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    surName: '',
    sex: '',
    birthDate: '',
    likes: [],
    dislikes: [],
    location: '',
    avatar: '',
    currentTravelId: '',
    travelList: {},
  },
  loading: false,
  error: null,
  eventName: null,
} as InitialState;

const userSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    clearEventName: state => {
      state.eventName = null;
    },
    updateUserLocal: (state, action) => {
      state.data = {...state.data, ...action.payload};
    },
  },
  extraReducers: builder => {
    fetchGetUserProfileExtraReducer(builder);
    fetchLoginUserExtraReducer(builder);
    fetchSignUpUserExtraReducer(builder);
    fetchUpdateUserProfileExtraReducer(builder);
    fetchUpdateEmailExtraReducer(builder);
    fetchUpdatePasswordExtraReducer(builder);
  },
});

export const {clearEventName, updateUserLocal} = userSlice.actions;
export const userReducer = userSlice.reducer;
