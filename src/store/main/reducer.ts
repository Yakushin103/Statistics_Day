import { createSlice } from '@reduxjs/toolkit'

import CustomStorage from '../../utils/storage'

export const ThemeType = { main: 'main', dark: 'dark' }

export const getInitialStore = () => ({
  user: null,
  showLoader: false,
  theme: isDarkTheme() ? ThemeType.dark : ThemeType.main,
  isSidebarOpen: false,
  pageTitle: '',
})

const isDarkTheme = () => {
  const { theme } = CustomStorage;
  if (Object.values(ThemeType).includes(theme)) {
    return theme === ThemeType.dark;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }

  return false;
}

const mainSlice = createSlice({
  name: 'main',
  initialState: getInitialStore(),
  reducers: {
    updateUser: (store, { payload }) => ({
      ...store,
      user: payload,
    }),
    updatePageTitle: (store, { payload }) => ({
      ...store,
      pageTitle: payload,
    }),
  },
})

export const {
  updateUser,
  updatePageTitle
} = mainSlice.actions

export default mainSlice.reducer

