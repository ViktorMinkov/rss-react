import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homePageSlice from './reducers/homePageReducer';
import formSlice from './reducers/formReducer';

const rootReducer = combineReducers({
  homePageSlice,
  formSlice,
});

export default function configureAppStore(preloadedState?: object) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof configureAppStore>;
export type AppDispatch = ReturnType<typeof configureAppStore>['dispatch'];
