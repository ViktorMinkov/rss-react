import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Home from './Home';
import { server } from 'tests/mocks/server';
import mockData from 'tests/mocks/mockData';
import { Provider } from 'react-redux';
import configureAppStore from 'store/store';

const store = configureAppStore();

describe('Home test', () => {
  test('render Home page component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('check fetch and display data', async () => {
    server.listen();
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(await screen.findByText(/test/i)).toBeInTheDocument();
    expect(screen.getAllByRole('card').length).toBe(mockData.results.length);
    server.resetHandlers();
    server.close();
  });
});
