import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import InputImage from './InputImage';

describe('InputImage test', () => {
  const register = vi.fn();
  beforeEach(() => {
    render(<InputImage title="Image" inputError="Error" inputName="image" register={register} />);
  });

  test('render InputImage component', () => {
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });
});
