import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from 'types';

type FormType = {
  characters: ICharacter[] | [];
};

const initialState: FormType = {
  characters: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<ICharacter>) => {
      state.characters = [...state.characters, action.payload];
    },
  },
});

export const { setCharacters } = formSlice.actions;
export default formSlice.reducer;
