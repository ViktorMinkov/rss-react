import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar test', () => {
  test('localStorage works with mount/unmount task', async () => {
    const searchBar = render(<SearchBar />);
    const searchInput = screen.getByRole<HTMLInputElement>('textbox');
    const testStr = 'Test String';
    await userEvent.type(searchInput, testStr);
    searchBar.unmount();
    expect(localStorage.getItem('searchString')).toBe(testStr);
    render(<SearchBar />);
    const searchInputNew = screen.getByRole<HTMLInputElement>('textbox');
    expect(searchInputNew.value).toBe(testStr);
  });
});
