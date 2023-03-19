import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Layout from './Layout';
import Home from 'pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Layout test', () => {
  test('render Layout component', () => {
    render(
      <BrowserRouter>
        <Layout title="Home" component={<Home />} />
      </BrowserRouter>
    );
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
});
