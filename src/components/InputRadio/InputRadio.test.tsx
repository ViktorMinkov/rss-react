import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import InputRadio from './InputRadio';
import userEvent from '@testing-library/user-event';

describe('InputRadio test', () => {
  beforeEach(() => {
    const ref1: React.RefObject<HTMLInputElement> = React.createRef();
    const ref2: React.RefObject<HTMLInputElement> = React.createRef();
    const data = [
      { inputValue: 'testOne', inputRef: ref1 },
      { inputValue: 'testTwo', inputRef: ref2 },
    ];
    render(<InputRadio title="Radio" data={data} inputError="Error" inputName="test" />);
  });

  test('render InputRadio component', () => {
    expect(screen.getByText(/radio/i)).toBeInTheDocument();
  });
  test('is radio checked after clicking by user', async () => {
    const radioButtons = screen.getAllByRole('radio');
    await userEvent.click(radioButtons[0]);
    expect(radioButtons[0]).toBeChecked;
  });
});
