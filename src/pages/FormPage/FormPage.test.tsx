import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FormPage from './FormPage';
import userEvent from '@testing-library/user-event';

describe('FormPage test', () => {
  beforeEach(() => {
    render(<FormPage />);
  });
  test('render FormPage component', () => {
    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
});
