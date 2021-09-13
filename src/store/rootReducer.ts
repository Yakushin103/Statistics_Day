import { combineReducers } from 'redux'

import main from './main/reducer'

const combinedReducer = combineReducers({
  main,
});

export const RESET_STORE_ACTION_TYPE = 'RESET_WHOLE_STORE'

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_STORE_ACTION_TYPE) {
    return combinedReducer(undefined, action)
  }

  return combinedReducer(state, action)
};

export const resetStore = () => ({ type: RESET_STORE_ACTION_TYPE })

export default rootReducer