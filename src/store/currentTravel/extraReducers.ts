import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';

import {
  AddIdToVisitedPlaces,
  addIdToVisitedPlacesByPut,
  AddIdToVisitedPlacesResult,
  createTravelByPut,
  CreateTravelParams,
  CreateTravelResult,
  deletePlaceFromTravelItemByDelete,
  DeletePlaceFromTravelItemResult,
  EstimatePlace,
  estimatePlaceByPut,
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

export const estimatePlace = createAsyncThunk(
  Events.ESTIMATE_PLACE,
  async ({
    id,
    params,
  }: {
    id: string;
    params: EstimatePlace;
  }): Promise<EstimatePlace> => {
    try {
      const response = await estimatePlaceByPut(id, params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const estimatePlaceExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(estimatePlace.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(estimatePlace.fulfilled, state => {
      state.loading = false;
      state.eventName = Events.ESTIMATE_PLACE;
    })
    .addCase(estimatePlace.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const addIdToVisitedPlaces = createAsyncThunk(
  Events.ADD_ID_TO_VISITED_PLACES,
  async ({
    id,
    params,
  }: {
    id: string;
    params: AddIdToVisitedPlaces;
  }): Promise<AddIdToVisitedPlacesResult> => {
    try {
      const response = await addIdToVisitedPlacesByPut(id, params);

      return response;
    } catch (error) {
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const addIdToVisitedPlacesExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(addIdToVisitedPlaces.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addIdToVisitedPlaces.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.ADD_ID_TO_VISITED_PLACES;
      state.data = {
        ...state.data,
        visitedPlaces: action.payload.visitedPlaces,
      };
    })
    .addCase(addIdToVisitedPlaces.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};

export const deletePlaceFromTravelItem = createAsyncThunk(
  Events.DELETE_PLACE,
  async ({
    id,
    travelId,
    placeId,
  }: {
    id: string;
    travelId: string;
    placeId: string;
  }): Promise<DeletePlaceFromTravelItemResult> => {
    try {
      const response = await deletePlaceFromTravelItemByDelete(
        id,
        travelId,
        placeId,
      );

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(errorMessageHandler(error));
    }
  },
);

export const deletePlaceFromTravelItemExtraReducer = (
  builder: ActionReducerMapBuilder<InitialState>,
) => {
  builder
    .addCase(deletePlaceFromTravelItem.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deletePlaceFromTravelItem.fulfilled, (state, action) => {
      state.loading = false;
      state.eventName = Events.ADD_ID_TO_VISITED_PLACES;
      state.data.likeList = state.data.likeList.filter(
        item => item.fsq_id !== action.payload.placeId,
      );
      state.data.visitedPlaces = state.data.visitedPlaces.filter(
        item => item !== action.payload.placeId,
      );
    })
    .addCase(deletePlaceFromTravelItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
};
