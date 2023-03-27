import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import InputRadio from './InputRadio';
import userEvent from '@testing-library/user-event';

describe('InputRadio test', () => {
  const register = vi.fn();
  const data = ['testOne', 'testTwo'];
  beforeEach(() => {
    render(
      <InputRadio
        title="Gender"
        data={data}
        inputError="Error"
        inputName="gender"
        register={register}
      />
    );
  });

  test('render InputRadio component', () => {
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
  });
  test('is radio checked after clicking by user', async () => {
    const radioButtons = screen.getAllByRole<HTMLInputElement>('radio');
    await userEvent.click(radioButtons[0]);
    expect(radioButtons[0]).toBeChecked();
    expect(radioButtons[0].value).toEqual(data[0]);
  });
});
