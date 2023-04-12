import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducers/searchReducer';
import formSlice from './reducers/formReducer';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
