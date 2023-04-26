import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
import { ICharacter } from '@/types';

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
    setCharacters: (state, action: toolkitRaw.PayloadAction<ICharacter>) => {
      state.characters.push(action.payload);
    },
    togglePopup: (state, action: toolkitRaw.PayloadAction<boolean>) => {
      state.isPopupOpen = action.payload;
    },
  },
});

export const { setCharacters, togglePopup } = formSlice.actions;
export default formSlice.reducer;
