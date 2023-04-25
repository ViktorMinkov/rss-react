import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';
import { Provider } from 'react-redux';
import configureAppStore from 'store/store';
import { BrowserRouter } from 'react-router-dom';

const store = configureAppStore();

describe('App test', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
  test('render App', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
