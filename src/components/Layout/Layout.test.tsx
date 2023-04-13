import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Layout from './Layout';
import Home from 'pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('Layout test', () => {
  test('render Layout component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout title="Home" component={<Home />} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
});
