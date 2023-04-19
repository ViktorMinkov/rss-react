import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './reducers/homePageReducer';
import formSlice from './reducers/formReducer';

export const store = configureStore({
  reducer: {
    homePage: homePageSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
