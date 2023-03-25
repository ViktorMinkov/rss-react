import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import InputSelect from './InputSelect';

describe('InputSelect test', () => {
  const optionsValue = ['default', 'one', 'two', 'three'];
  beforeEach(() => {
    const ref: React.RefObject<HTMLSelectElement> = React.createRef();
    render(<InputSelect title="Select" inputRef={ref} inputError="Error" options={optionsValue} />);
  });

  test('render InputSelect component', () => {
    expect(screen.getByText(/select/i)).toBeInTheDocument();
  });
  test('check amount of options', () => {
    const options = screen.getAllByRole<HTMLOptionElement>('option');
    expect(options.length).toBe(optionsValue.length);
  });
  test('check default option', async () => {
    const select = screen.getByRole<HTMLSelectElement>('combobox');
    const option = screen.getByRole<HTMLOptionElement>('option', {
      name: optionsValue[3],
    });
    await userEvent.selectOptions(select, optionsValue[3]);
    expect(option.selected).toBe(true);
  });
});
