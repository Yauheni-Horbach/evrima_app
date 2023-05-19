import axios from 'axios';
import type {RequestResult} from '../types';
import {errorMessageHandler} from '../ErrorHandler';

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

export const getUserProfile = async (
  id: string,
): RequestResult<UserRequestResult> => {
  try {
    const response = await axios.get(`https://evrima.herokuapp.com/user/${id}`);

    return response.data;
  } catch (error: any) {
    return {
      isError: true,
      message: errorMessageHandler(error),
    };
  }
};

export const putUpdateUserProfile = async (
  id: string,
  params: UpdateUserParams,
): RequestResult<UserRequestResult> => {
  try {
    const response = await axios.put(
      `https://evrima.herokuapp.com/user/${id}`,
      {...params},
    );

    return response.data;
  } catch (error: any) {
    return {
      isError: true,
      message: errorMessageHandler(error),
    };
  }
};
