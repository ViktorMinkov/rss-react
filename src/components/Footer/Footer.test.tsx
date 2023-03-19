import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Footer from './Footer';

describe('Footer test', () => {
  test('render Footer component', () => {
    render(<Footer />);
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBe(2);
  });
});
