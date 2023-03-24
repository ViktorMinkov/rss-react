import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FormPage from './FormPage';

describe('FormPage test', () => {
  beforeEach(() => {
    render(<FormPage />);
  });
  test('render FormPage component', () => {
    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
});
