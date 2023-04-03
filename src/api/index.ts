import { IApiResponse } from 'types';

const baseURL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (): Promise<IApiResponse> => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};
export const getFilteredCharacters = async (searchStr: string): Promise<IApiResponse> => {
  const response = await fetch(`${baseURL}/?name={${searchStr}}`);
  const data = await response.json();
  return data;
};
