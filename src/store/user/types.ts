import {UserRequestResult} from '../../api/User';

interface DataUser extends UserRequestResult {}

export type InitialState = {
  data: DataUser;
  loading: boolean;
  error: null | string;
  eventName: null | string;
};
