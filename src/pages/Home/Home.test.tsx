import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Home from './Home';

describe('Home test', () => {
  beforeEach(() => {
    render(<Home />);
  });
  test('render Home page component', () => {
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('render search button in Home page component', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
