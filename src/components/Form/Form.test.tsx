import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureAppStore from '@/store/store';

const store = configureAppStore();

describe('Form test', () => {
  const testName = 'Viktor';
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });
  test('render Form component', () => {
    expect(screen.getByText(/Full name/)).toBeInTheDocument();
    expect(screen.getByText(/Gender/)).toBeInTheDocument();
    expect(screen.getByText(/Species/)).toBeInTheDocument();
    expect(screen.getByText(/Status/)).toBeInTheDocument();
    expect(screen.getByText(/Created/)).toBeInTheDocument();
    expect(screen.getByText(/Image/)).toBeInTheDocument();
    expect(screen.getByText(/data processing/i)).toBeInTheDocument();
  });
  test('check typing in textbox works', async () => {
    const inputText = screen.getByRole<HTMLInputElement>('textbox');
    await userEvent.type(inputText, testName);
    expect(inputText.value.length).toBe(testName.length);
  });
});
