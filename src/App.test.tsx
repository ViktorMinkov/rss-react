import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import configureAppStore from '@/store/store';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';

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
