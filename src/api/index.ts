import { ICharacter } from 'types';

export const baseURL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (searchStr?: string): Promise<ICharacter[]> => {
  const url = searchStr ? `${baseURL}/?name=${searchStr}` : baseURL;
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data.results;
  }
  return [];
};
