import { instance } from './axios'
import { token } from '../utils/token'
import { SingIn } from '../utils/types'

import { user } from '../data/mock.json'

export const signIn = (data: SingIn) => {
  // return instance.post(`/sign-in`, data).then(tokenResponseHandler);
  // return user
  return null
};

export const check = () => {
  if (!token.access.get()) { return; }

  // return instance.get(`/me`)
}