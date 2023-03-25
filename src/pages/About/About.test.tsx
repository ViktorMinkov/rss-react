import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import About from './About';

describe('About test', () => {
  test('render About component', () => {
    render(<About />);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });
});
