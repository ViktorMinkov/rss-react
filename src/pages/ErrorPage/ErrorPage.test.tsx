import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ErrorPage from './ErrorPage';

describe('ErrorPage test', () => {
  test('render ErrorPage component', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/404/)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
