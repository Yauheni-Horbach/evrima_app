export interface DataUser {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  location: string;
  radius: number;
  placesList: any[];
  likeList: any[];
  dislikeList: any[];
  nextPageLink: string;
}

export type InitialState = {
  data: DataUser;
  loading: boolean;
  error: null | string;
  eventName: null | string;
};
