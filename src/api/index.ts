import { IApiResponse } from 'types';

const baseURL = 'https://rickandmortyapi.com/api/character';
export const getCharacters = async (): Promise<IApiResponse> => {
  const response = await fetch(baseURL);
  const data = response.json();
  return data;
};
