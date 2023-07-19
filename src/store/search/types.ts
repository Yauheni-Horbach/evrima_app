export interface DataUser {
  currentSearchResultProduct: any;
}

export type InitialState = {
  data: DataUser;
  loading: boolean;
  error: null | string;
  eventName: null | string;
};
