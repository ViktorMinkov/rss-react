import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import InputCheckbox from './InputCheckbox';
import userEvent from '@testing-library/user-event';

describe('InputCheckbox test', () => {
  const register = vi.fn();
  beforeEach(() => {
    render(
      <InputCheckbox
        text="agreement"
        inputError="Error"
        inputName="agreement"
        register={register}
      />
    );
  });

  test('render InputCheckbox component', () => {
    expect(screen.getByText(/agreement/i)).toBeInTheDocument();
  });
  test('InputCheckbox works after clicked by user', async () => {
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
