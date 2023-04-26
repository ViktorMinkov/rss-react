import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import InputDate from './InputDate';
import userEvent from '@testing-library/user-event';

describe('InputDate test', () => {
  const register = vi.fn();
  beforeEach(() => {
    render(<InputDate title="Date" inputError="Error" inputName="created" register={register} />);
  });

  test('render InputDate component', () => {
    expect(screen.getByText(/date/i)).toBeInTheDocument();
  });
  test('check date input works', async () => {
    const dateInput = screen.getByRole<HTMLInputElement>('datePicker');
    const testDate = '1993-01-13';
    await userEvent.type(dateInput, testDate);
    expect(dateInput.value).toBe(testDate);
  });
});
