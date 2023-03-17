import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App test', () => {
  test('render App', () => {
    render(<App />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
  test('find home title', () => {
    render(<App />);
    expect(screen.getByText(/home page/i)).toHaveClass('home__title');
  });
});
