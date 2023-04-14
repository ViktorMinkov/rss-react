import { getCharacters } from 'api';
import { describe, test, expect } from 'vitest';

describe('validateSelect func works', () => {
  test('check Api func with correct searchStr', async () => {
    const searchStr = 'adjudicator';
    const result = await getCharacters(searchStr);
    expect(result.length).toEqual(1);
  });
  test('check Api func with incorrect searchStr', async () => {
    const searchStr = '12345';
    expect(async () => await getCharacters(searchStr)).rejects.toThrowError();
  });
});
