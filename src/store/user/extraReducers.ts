import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';

import {
  AuthResult,
  AuthResultWithEmail,
  loginUserByPost,
  LoginUserByPostParams,
  signUpUserByPost,
  SignUpUserByPostParams,
  updateEmailByPost,
  UpdateEmailByPostParams,
  updatePasswordByPost,
  UpdatePasswordByPostParams,
} from '../../api/Auth';
import {
  getUserProfileByGet,
  UpdateUserParams,
  updateUserProfileByPut,
  UserRequestResult,
} from '../../api/User';
import {errorMessageHandler} from '../../managers/ErrorHandler';

import {Events} from './extraEvents';
import {InitialState} from './types';

export const fetchLoginUser = createAsyncThunk(
  Events.LOGIN_USER,
  async (params: LoginUserByPostParams): Promise<AuthResult> => {
    try {
      const response = await loginUserByPost(params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchLoginUserExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(fetchLoginUser.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.LOGIN_USER;
      state.data.id = action.payload.id;
    })
    .addCase(fetchLoginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const fetchSignUpUser = createAsyncThunk(
  Events.SIGN_UP_USER,
  async (params: SignUpUserByPostParams): Promise<AuthResult> => {
    try {
      const response = await signUpUserByPost(params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchSignUpUserExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(fetchSignUpUser.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSignUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.SIGN_UP_USER;
      state.data.id = action.payload.id;
    })
    .addCase(fetchSignUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const fetchGetUserProfile = createAsyncThunk(
  Events.GET_USER_PROFILE,
  async (id: string): Promise<UserRequestResult> => {
    try {
      const response = await getUserProfileByGet(id);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchGetUserProfileExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(fetchGetUserProfile.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.GET_USER_PROFILE;
      state.data = action.payload;
    })
    .addCase(fetchGetUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const fetchUpdateUserProfile = createAsyncThunk(
  Events.UPDATE_USER_PROFILE,
  async ({
    id,
    params,
  }: {
    id: string;
    params: UpdateUserParams;
  }): Promise<UserRequestResult> => {
    try {
      const response = await updateUserProfileByPut(id, params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchUpdateUserProfileExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(fetchUpdateUserProfile.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.UPDATE_USER_PROFILE;
      state.data = action.payload;
    })
    .addCase(fetchUpdateUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const fetchUpdatePassword = createAsyncThunk(
  Events.UPDATE_PASSWORD,
  async (params: UpdatePasswordByPostParams): Promise<AuthResult> => {
    try {
      const response = await updatePasswordByPost(params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchUpdatePasswordExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(fetchUpdatePassword.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdatePassword.fulfilled, state => {
      state.loading = false;
      state.eventName = Events.UPDATE_PASSWORD;
    })
    .addCase(fetchUpdatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const fetchUpdateEmail = createAsyncThunk(
  Events.UPDATE_EMAIL,
  async (params: UpdateEmailByPostParams): Promise<AuthResultWithEmail> => {
    try {
      const response = await updateEmailByPost(params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const fetchUpdateEmailExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(fetchUpdateEmail.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.UPDATE_EMAIL;
      state.data.email = action.payload.email;
    })
    .addCase(fetchUpdateEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};
