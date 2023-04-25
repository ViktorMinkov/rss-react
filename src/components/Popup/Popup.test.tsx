import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Popup from './Popup';
import { Provider } from 'react-redux';
import configureAppStore from 'store/store';

const store = configureAppStore();

describe('Popup test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Popup text="Popup" />
      </Provider>
    );
  });
  test('render Popup component', () => {
    expect(screen.getByText(/popup/i)).toBeInTheDocument();
  });
  test('render Popup component', () => {
    expect(screen.getByText(/popup/i)).toBeInTheDocument();
  });
});
