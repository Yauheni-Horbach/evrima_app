import axios from 'axios';
import type {RequestResult} from '../types';
import {errorMessageHandler} from '../ErrorHandler';

type AuthResult = {token: string; id: string};

export const getLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): RequestResult<AuthResult> => {
  try {
    const response = await axios.post(
      'https://evrima.herokuapp.com/auth/login',
      {
        email,
        password,
      },
    );

    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
    return {
      isError: true,
      message: errorMessageHandler(error),
    };
  }
};

export const postSignUp = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}): RequestResult<AuthResult> => {
  try {
    const response = await axios.post(
      'https://evrima.herokuapp.com/auth/signup',
      {
        email,
        password,
        name,
      },
    );

    return response.data;
  } catch (error: any) {
    return {
      isError: true,
      message: errorMessageHandler(error),
    };
  }
};

export const postUpdatePassword = async ({
  email,
  password,
  newPassword,
}: {
  email: string;
  password: string;
  newPassword: string;
}): RequestResult<AuthResult> => {
  try {
    const response = await axios.post(
      'https://evrima.herokuapp.com/auth/update-password',
      {
        email,
        password,
        newPassword,
      },
    );

    return response.data;
  } catch (error: any) {
    return {
      isError: true,
      message: errorMessageHandler(error),
    };
  }
};

export const postUpdateEmail = async ({
  email,
  newEmail,
}: {
  email: string;
  newEmail: string;
}): RequestResult<AuthResult> => {
  try {
    const response = await axios.post(
      'https://evrima.herokuapp.com/auth/update-email',
      {
        email,
        newEmail,
      },
    );

    return response.data;
  } catch (error: any) {
    return {
      isError: true,
      message: errorMessageHandler(error),
    };
  }
};
