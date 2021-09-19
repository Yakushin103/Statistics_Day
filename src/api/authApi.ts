import { instance } from './axios'
import { token } from '../utils/token'
import { SignIn } from '../utils/types'

import { user } from '../data/mock.json'

export const signIn = (data: SignIn) => {
  // return instance.post(`/sign-in`, data).then(tokenResponseHandler);
  // return user
  return null
}

export const signUp = (data: SignIn) => {
  // return instance.post(`/sign-in`, data).then(tokenResponseHandler);
  // return user
  return null
}

export const check = () => {
  if (!token.access.get()) { return; }

  // return instance.get(`/me`)
}

// const tokenResponseHandler = ({ access, refresh, user }) => {
//   token.access.set(access);
//   token.refresh.set(refresh);

//   setToken(access);

//   return user;
// };

// /**
//  * @param {{
//     username: string;
//     password: string;
//  * }} data
//  */
// export const signIn = (data) => {
//   return axios.post(`${path}/sign-in`, data).then(tokenResponseHandler);
// };

// /**
//  * @param {{
//     email: string;
//     login: string;
//     password: string;
//  * }} data
//  */
// export const signUp = (data) => {
//   return axios.post(`${path}/sign-up`, data).then(tokenResponseHandler);
// };

// export const forgotPassword = (email) => {
//   return axios.post(`${path}/password-restore`, { email });
// };

// export const resetPassword = (data) => {
//   return axios.post(`${path}/password-reset`, data);
// };

// export const check = () => {
//   if (!token.access.get()) { return; }

//   return axios.get(`${path}/me`);
// };

// export const signOut = () => {
//   return axios.post(`${path}/logout`);
// };

export default {
  signIn,
  signUp,
  check,
  // signOut,
};