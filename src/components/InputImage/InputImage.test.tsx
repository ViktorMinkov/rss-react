import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import InputImage from './InputImage';

describe('InputImage test', () => {
  beforeEach(() => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    render(<InputImage title="Image" inputError="Error" inputRef={ref} />);
  });

  test('render InputImage component', () => {
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });
});
