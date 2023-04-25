import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import configureAppStore from '@/store/store';

const store = configureAppStore();

describe('SearchBar test', () => {
  test('localStorage works with mount/unmount task', async () => {
    const searchBar = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByRole<HTMLInputElement>('textbox');
    const submitBtn = screen.getByRole<HTMLButtonElement>('button');
    const testStr = 'Test String';
    await userEvent.type(searchInput, testStr);
    await userEvent.click(submitBtn);
    searchBar.unmount();
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInputNew = screen.getByRole<HTMLInputElement>('textbox');
    expect(searchInputNew.value).toBe(testStr);
  });
});
