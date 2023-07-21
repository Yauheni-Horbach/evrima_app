import type {PlaceItem} from '@api/types';

export interface DataUser {
  bookmarksList: PlaceItem[];
}

export type InitialState = {
  data: DataUser;
  loading: boolean;
  error: null | string;
  eventName: null | string;
};
