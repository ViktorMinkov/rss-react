import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Home from './Home';

describe('Home test', () => {
  test('render Home page component', () => {
    render(<Home />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('render button in Home page component', () => {
    render(<Home />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
