import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://localhost:5000',
  // headers: {
  //   "API-KEY": "9b3c6087-f9b8-4f04-8de9-5abde1522073"
  // }
})