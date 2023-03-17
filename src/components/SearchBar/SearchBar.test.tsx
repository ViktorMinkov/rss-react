import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar test', () => {
  test('user typing works', () => {
    render(<SearchBar />);
  });
});
