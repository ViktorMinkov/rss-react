import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from 'pages/About';
import ErrorPage from 'pages/ErrorPage';
import Home from 'pages/Home';

describe('App test', () => {
  test('render Home page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
  test('render About page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });
  test('render Error page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
  test('find home title', () => {
    render(<App />);
    expect(screen.getByText(/home page/i)).toHaveClass('home__title');
  });
});
