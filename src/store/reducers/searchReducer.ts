import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchType = {
  searchString: string;
};

const initialState: SearchType = {
  searchString: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;
export default searchSlice.reducer;
