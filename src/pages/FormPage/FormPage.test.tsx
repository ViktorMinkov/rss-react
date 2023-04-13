import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FormPage from './FormPage';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('FormPage test', () => {
  const inputsAmount = 7;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
  });
  test('render FormPage component', () => {
    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
  test('sumbit button works', async () => {
    const sumbitBtn = screen.getByRole<HTMLOptionElement>('button');
    await userEvent.click(sumbitBtn);
    const errors = screen.getAllByText(/is required/i);
    expect(errors.length).toBe(inputsAmount);
  });
});
