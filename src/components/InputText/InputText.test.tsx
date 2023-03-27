import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import InputText from './InputText';

describe('InputText test', () => {
  const register = vi.fn();
  beforeEach(() => {
    render(
      <InputText
        title="Text"
        inputError="Error"
        placeholder="Placeholder"
        inputName="name"
        register={register}
      />
    );
  });
  test('render InputText component', () => {
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
  test('check InputText value after typing', async () => {
    const textInput = screen.getByRole<HTMLInputElement>('textbox');
    const testString = 'Viktor';
    await userEvent.type(textInput, testString);
    expect(textInput.value.length).toBe(6);
  });
});
