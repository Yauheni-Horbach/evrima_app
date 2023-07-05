interface DataUser {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  location: string;
}

export type InitialState = {
  data: DataUser;
  loading: boolean;
  error: null | string;
  eventName: null | string;
};
