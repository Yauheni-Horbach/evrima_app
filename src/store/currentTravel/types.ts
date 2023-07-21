import type {PlaceItem} from '@api/types';

export interface DataUser {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  location: string;
  radius: number;
  placesList: PlaceItem[];
  likeList: PlaceItem[];
  dislikeList: PlaceItem[];
  nextPageLink: string;
  startDate: string;
  endDate: string;
}

export type InitialState = {
  data: DataUser;
  loading: boolean;
  error: null | string;
  eventName: null | string;
};
