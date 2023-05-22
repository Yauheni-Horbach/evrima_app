import {createSlice} from '@reduxjs/toolkit';
import {User} from '../storeNames';
import {InitialState} from './types';
import {
  fetchGetUserProfileExtraReducer,
  fetchLoginUserExtraReducer,
  fetchSignUpUserExtraReducer,
  fetchUpdateUserProfileExtraReducer,
} from './extraReducers';

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
  },
  extraReducers: builder => {
    fetchGetUserProfileExtraReducer(builder);
    fetchLoginUserExtraReducer(builder);
    fetchSignUpUserExtraReducer(builder);
    fetchUpdateUserProfileExtraReducer(builder);
  },
});

export const {clearEventName} = userSlice.actions;
export const userReducer = userSlice.reducer;
