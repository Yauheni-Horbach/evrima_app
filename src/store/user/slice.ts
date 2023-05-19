import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../storeNames';
import {
  loginUserByPost,
  signUpUserByPost,
  SignUpUserByPostParams,
  LoginUserByPostParams,
  AuthResult,
} from '../../api/Auth';
import {InitialState} from './types';
import {errorMessageHandler} from '../../managers/ErrorHandler';

const initialState = {
  data: {
    id: '',
  },
  loading: false,
  error: null,
} as InitialState;

export const fetchLoginUser = createAsyncThunk(
  'loginUser',
  async (params: LoginUserByPostParams): Promise<AuthResult> => {
    try {
      const response = await loginUserByPost(params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchSignUpUser = createAsyncThunk(
  'signUpUser',
  async (params: SignUpUserByPostParams): Promise<AuthResult> => {
    try {
      const response = await signUpUserByPost(params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

const userSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    addUserId: (state, {payload}: {payload: {id: string}}) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLoginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.id = action.payload.id;
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });

    builder
      .addCase(fetchSignUpUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSignUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.id = action.payload.id;
      })
      .addCase(fetchSignUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export const {addUserId} = userSlice.actions;
export const userReducer = userSlice.reducer;
