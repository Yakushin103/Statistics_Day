import { createAsyncThunk } from '@reduxjs/toolkit'

import { signIn } from '../../api/authApi'
import { updateUser } from './reducer'

export const authorize = createAsyncThunk(
  'main/authorizeUser',
  async (arg, { dispatch }) => {
    try {
      const data = {
        login: "Yakushin103",
        password: "qwerty"
      }

      const user = signIn(data)
      dispatch(updateUser(user))
      // dispatch(updateUser(null))

    } catch (err) {
      dispatch(updateUser(null))
    }
  },
)