import { instance } from './axios'
import { token } from '../utils/token'
import { SignIn } from '../utils/types'

// const tokenResponseHandler = ({ access, refresh, user }: any) => {
//   console.log('token', access, refresh, user);
  
//   token.access.set(access);
//   token.refresh.set(refresh);

  // setToken(access);

//   return user;
// };
// auth/login
export const signIn = async (data: SignIn) => {
  const user = await instance.post(`/auth/login`, data).then(res => res.data)
  return user
}

// auth/register
export const signUp = (data: SignIn) => {
  const user = instance.post(`/auth/register`, data)
  console.log('user', data);
  // return user
}

export const check = () => {
  if (!token.access.get()) { return; }

  // return instance.get(`/me`)
}



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