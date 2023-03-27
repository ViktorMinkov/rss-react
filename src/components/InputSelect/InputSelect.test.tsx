import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import InputSelect from './InputSelect';

describe('InputSelect test', () => {
  const optionsValue = ['default', 'male', 'female', 'other'];
  const register = vi.fn();
  beforeEach(() => {
    render(
      <InputSelect
        title="Status"
        inputError="Error"
        data={optionsValue}
        inputName="status"
        register={register}
      />
    );
  });

  test('render InputSelect component', () => {
    expect(screen.getByText(/status/i)).toBeInTheDocument();
  });
  test('check amount of options', () => {
    const options = screen.getAllByRole<HTMLOptionElement>('option');
    expect(options.length).toBe(optionsValue.length);
  });
  test('check selected option', async () => {
    const select = screen.getByRole<HTMLSelectElement>('combobox');
    const option = screen.getByRole<HTMLOptionElement>('option', {
      name: optionsValue[3],
    });
    await userEvent.selectOptions(select, optionsValue[3]);
    expect(option.selected).toBe(true);
    expect(select.value).toEqual(optionsValue[3]);
  });
  test('check default option (error should be on the screen', async () => {
    const select = screen.getByRole<HTMLSelectElement>('combobox');
    const option = screen.getByRole<HTMLOptionElement>('option', {
      name: optionsValue[0],
    });
    await userEvent.selectOptions(select, optionsValue[0]);
    expect(option.selected).toBe(true);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
