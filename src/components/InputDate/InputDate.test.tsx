import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import InputDate from './InputDate';

describe('InputDate test', () => {
  const register = vi.fn();
  beforeEach(() => {
    render(<InputDate title="Date" inputError="Error" inputName="created" register={register} />);
  });

  test('render InputDate component', () => {
    expect(screen.getByText(/date/i)).toBeInTheDocument();
  });
});
