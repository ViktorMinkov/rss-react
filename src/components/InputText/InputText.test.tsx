import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import InputText from './InputText';

describe('InputText test', () => {
  test('render InputText component', () => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    render(<InputText title="Text" inputRef={ref} inputError="Error" placeholder="Placeholder" />);
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
  test('check InputText value after typing', async () => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    render(<InputText title="Text" inputRef={ref} inputError="Error" placeholder="Placeholder" />);
    const textInput = screen.getByRole<HTMLInputElement>('textbox');
    const testString = 'Viktor';
    await userEvent.type(textInput, testString);
    expect(textInput.value.length).toBe(6);
  });
});
