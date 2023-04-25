import homePageSlice from './reducers/homePageReducer';
import formSlice from './reducers/formReducer';
import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

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
