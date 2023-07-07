import axios from 'axios';

import type {RequestResult} from '../types';

export type AuthResult = {token: string; id: string};

export type LoginUserByPostParams = {
  email: string;
  password: string;
};

export type SignUpUserByPostParams = {
  email: string;
  password: string;
  name: string;
};

export type UpdatePasswordByPostParams = {
  email: string;
  password: string;
  newPassword: string;
};

export type UpdateEmailByPostParams = {
  email: string;
  newEmail: string;
};

export const loginUserByPost = async ({
  email,
  password,
}: LoginUserByPostParams): RequestResult<AuthResult> => {
  const response = await axios.post('https://evrima.herokuapp.com/auth/login', {
    email,
    password,
  });

  return response.data;
};

export const signUpUserByPost = async ({
  email,
  password,
  name,
}: SignUpUserByPostParams): RequestResult<AuthResult> => {
  const response = await axios.post(
    'https://evrima.herokuapp.com/auth/signup',
    {
      email,
      password,
      name,
    },
  );

  return response.data;
};

export const updatePasswordByPost = async ({
  email,
  password,
  newPassword,
}: UpdatePasswordByPostParams): RequestResult<AuthResult> => {
  const response = await axios.post(
    'https://evrima.herokuapp.com/auth/update-password',
    {
      email,
      password,
      newPassword,
    },
  );

  return response.data;
};

export const updateEmailByPost = async ({
  email,
  newEmail,
}: UpdateEmailByPostParams): RequestResult<AuthResult> => {
  const response = await axios.post(
    'https://evrima.herokuapp.com/auth/update-email',
    {
      email,
      newEmail,
    },
  );

  return response.data;
};
