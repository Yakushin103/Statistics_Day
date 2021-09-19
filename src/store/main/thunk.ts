import { createAsyncThunk } from '@reduxjs/toolkit'

import authApi from '../../api/authApi'
import { updateUser } from './reducer'
import { SignIn } from '../../utils/types'

export const authorize = createAsyncThunk(
  'main/authorizeUser',
  async (arg, { dispatch }) => {
    try {
      const user = await authApi.check()

      dispatch(updateUser(user))

    } catch (err) {
      dispatch(updateUser(null))
    }
  },
)

export const signIn = createAsyncThunk(
  'main/signInUser',
  async (arg: SignIn, { dispatch }) => {
    try {
      const user = await authApi.signIn(arg)

      dispatch(updateUser(user))

    } catch (err) {
      dispatch(updateUser(null))
    }
  },
)

export const signUp = createAsyncThunk(
  'main/signUpUser',
  async (arg: SignIn, { dispatch }) => {
    try {
      const user = await authApi.signUp(arg)

      dispatch(updateUser(user))

    } catch (err) {
      dispatch(updateUser(null))
    }
  },
)