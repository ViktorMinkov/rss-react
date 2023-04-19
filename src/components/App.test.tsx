import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('App test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  test('render App', () => {
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
  test('find home title', () => {
    expect(screen.getByText(/home page/i)).toHaveClass('home__title');
  });
});
