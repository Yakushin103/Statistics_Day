import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
})

// export const setToken = (token) => {
//   customAxios.defaults.headers.Authorization = `Bearer ${token}`;
// };

// customAxios.defaults.headers.app_id = config.appId;
// setToken(tokenUtil.access.get());

// customAxios.interceptors.request.use((request) => {
//   // TO-DO: Return when we will have a device check
//   // request.headers.device = '';
//   return request;
// });

// customAxios.interceptors.response.use(
//   ({ data }) => data,
//   async (err) => {
//     if (err?.response?.data === 'expired') {
//       if (!refreshPromise) {
//         refreshPromise = refreshToken();
//       }
//       await refreshPromise;

//       // eslint-disable-next-line no-param-reassign
//       err.config.headers.Authorization = `Bearer ${tokenUtil.access.get()}`;

//       return customAxios(err.config);
//     }

//     return Promise.reject(err.response);
//   },
// );

// let refreshPromise = null;
// const refreshToken = async () => {
//   try {
//     const { access, refresh } = await customAxios.post('/auth/refresh', { token: tokenUtil.refresh.get() });

//     tokenUtil.access.set(access);
//     tokenUtil.refresh.set(refresh);

//     setToken(tokenUtil.access);
//   } catch (err) {
//     logOut();
//     throw err;
//   } finally {
//     refreshPromise = null;
//   }
// };

// export default customAxios;