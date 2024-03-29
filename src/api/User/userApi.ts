import axios from 'axios';

import type {PlaceItem, RequestResult, TravelItem} from '../types';

export interface UpdateUserParams {
  name?: string;
  surName?: string;
  sex?: string;
  birthDate?: string;
  likes?: string[];
  dislikes?: string[];
  location?: string;
  avatar?: string;
  currentTravelId?: string;
}

export interface UserRequestResult extends UpdateUserParams {
  name: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  currentTravelId: string;
  travelList: {
    [id: string]: TravelItem;
  };
}

export interface CreateTravelParams {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  location: string;
  radius: number;
  startDate: string;
  endDate: string;
}

export interface EstimatePlace {
  currentTravelId: string;
  placeItem: PlaceItem;
  event: 'like' | 'dislike';
}

export interface CreateTravelResult {
  currentTravelId: string;
  travelItem: TravelItem;
}

export interface AddIdToVisitedPlaces {
  currentTravelId: string;
  id: string;
}

export interface AddIdToVisitedPlacesResult {
  currentTravelId: string;
  visitedPlaces: string[];
}

export interface DeletePlaceFromTravelItemResult {
  currentTravelId: string;
  placeId: string;
}

export const getUserProfileByGet = async (
  id: string,
): RequestResult<UserRequestResult> => {
  const response = await axios.get(`https://evrima.herokuapp.com/user/${id}`);

  return response.data;
};

export const updateUserProfileByPut = async (
  id: string,
  params: UpdateUserParams,
): RequestResult<UserRequestResult> => {
  const response = await axios.put(
    `https://evrima.herokuapp.com/user/${id}`,
    params,
  );

  return response.data;
};

export const createTravelByPut = async (
  id: string,
  params: CreateTravelParams,
): RequestResult<CreateTravelResult> => {
  const response = await axios.put(
    `https://evrima.herokuapp.com/user/createTravel/${id}`,
    params,
  );

  return response.data;
};

export const estimatePlaceByPut = async (
  id: string,
  params: EstimatePlace,
): RequestResult<EstimatePlace> => {
  const response = await axios.put(
    `https://evrima.herokuapp.com/user/estimatePlace/${id}`,
    params,
  );

  return response.data;
};

export const addIdToVisitedPlacesByPut = async (
  id: string,
  params: AddIdToVisitedPlaces,
): RequestResult<AddIdToVisitedPlacesResult> => {
  const response = await axios.put(
    `https://evrima.herokuapp.com/user/addIdToVisitedPlaces/${id}`,
    params,
  );

  return response.data;
};

export const deletePlaceFromTravelItemByDelete = async (
  id: string,
  travelId: string,
  placeId: string,
): RequestResult<DeletePlaceFromTravelItemResult> => {
  const response = await axios.delete(
    `https://evrima.herokuapp.com/user/deletePlaceFromTravelItem/${id}/${travelId}/${placeId}`,
  );

  return response.data;
};
