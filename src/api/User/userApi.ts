import axios from 'axios';
import type {RequestResult} from '../types';

interface UpdateUserParams {
  name?: string;
  surName?: string;
  sex?: string;
  birthDate?: string;
  likes?: string[];
  dislikes?: string[];
  location?: string;
  avatar?: string;
}

interface UserRequestResult extends UpdateUserParams {
  name: string;
  email: string;
  password: string;
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
  const response = await axios.put(`https://evrima.herokuapp.com/user/${id}`, {
    ...params,
  });

  return response.data;
};
