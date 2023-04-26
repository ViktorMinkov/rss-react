import { ICharacter } from '@/types';

export const baseURL = 'https://rickandmortyapi.com/api/character';

export const emptyCharacter: ICharacter = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  created: '',
};
