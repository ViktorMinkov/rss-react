import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from 'types';

type FormType = {
  characters: ICharacter[];
  isPopupOpen: boolean;
};

const initialState: FormType = {
  characters: [],
  isPopupOpen: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<ICharacter>) => {
      state.characters.push(action.payload);
    },
    togglePopup: (state, action: PayloadAction<boolean>) => {
      state.isPopupOpen = action.payload;
    },
  },
});

export const { setCharacters, togglePopup } = formSlice.actions;
export default formSlice.reducer;
