import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters } from 'api';
import { ICharacter } from 'types';

type HomePageType = {
  searchString: string;
  characters: ICharacter[];
  isLoading: boolean;
  errorMsg: string;
};

const initialState: HomePageType = {
  searchString: '',
  characters: [],
  isLoading: false,
  errorMsg: '',
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async (searchStr: string, thunkAPI) => {
    try {
      const characters = await getCharacters(searchStr);
      return characters;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}: We have nothing there`);
    }
  }
);

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.isLoading = false;
        state.errorMsg = '';
      })
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMsg = action.payload as string;
      });
  },
});

export const { setSearchString } = homePageSlice.actions;
export default homePageSlice.reducer;
