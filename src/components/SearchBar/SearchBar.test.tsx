import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar test', () => {
  const filterFunc = vi.fn();
  test('localStorage works with mount/unmount task', async () => {
    const searchBar = render(<SearchBar fetchCharacters={filterFunc} />);
    const searchInput = screen.getByRole<HTMLInputElement>('textbox');
    const submitBtn = screen.getByRole<HTMLButtonElement>('button');
    const testStr = 'Test String';
    await userEvent.type(searchInput, testStr);
    await userEvent.click(submitBtn);
    searchBar.unmount();
    expect(localStorage.getItem('searchString')).toBe(testStr);
    render(<SearchBar fetchCharacters={filterFunc} />);
    const searchInputNew = screen.getByRole<HTMLInputElement>('textbox');
    expect(searchInputNew.value).toBe(testStr);
  });
});
