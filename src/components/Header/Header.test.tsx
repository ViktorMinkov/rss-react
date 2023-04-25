import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header test', () => {
  test('render Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBe(3);
  });
  test('render Header without title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.queryByText(/header/i)).toBeNull();
  });
});
