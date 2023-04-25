import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createAsyncThunk, createSlice } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
import { baseURL, getCharacters } from '../../api';
import { ICharacter } from '@/types';

type HomePageType = {
  searchString: string;
  characters: ICharacter[];
  isLoading: boolean;
  errorMsg: string;
  character: ICharacter | object;
};

const initialState: HomePageType = {
  searchString: '',
  characters: [],
  isLoading: false,
  errorMsg: '',
  character: {},
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
export const fetchCharacterByID = createAsyncThunk(
  'charactersById/fetch',
  async (id: number, thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}/${id}`);
      const character = await response.json();
      return character;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}: invalid ID`);
    }
  }
);

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSearchString: (state, action: toolkitRaw.PayloadAction<string>) => {
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
      })
      .addCase(fetchCharacterByID.fulfilled, (state, action) => {
        state.character = action.payload as ICharacter;
      });
  },
});

export const { setSearchString } = homePageSlice.actions;
export default homePageSlice.reducer;
