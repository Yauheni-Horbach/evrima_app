import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';

import {
  createTravelByPut,
  CreateTravelParams,
  CreateTravelResult,
} from '../../api/User';
import {errorMessageHandler} from '../../managers/ErrorHandler';

import {Events} from './extraEvents';
import {InitialState} from './types';

export const createTravel = createAsyncThunk(
  Events.CREATE_TRAVEL,
  async ({
    id,
    params,
  }: {
    id: string;
    params: CreateTravelParams;
  }): Promise<CreateTravelResult> => {
    try {
      const response = await createTravelByPut(id, params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const createTravelExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(createTravel.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createTravel.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.CREATE_TRAVEL;
      state.data = {
        ...state.data,
        ...action.payload.travelItem,
        id: action.payload.currentTravelId,
      };
    })
    .addCase(createTravel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};
