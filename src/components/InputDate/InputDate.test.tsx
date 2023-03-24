import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import InputDate from './InputDate';

describe('InputDate test', () => {
  beforeEach(() => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    render(<InputDate title="Date" inputError="Error" inputRef={ref} />);
  });

  test('render InputDate component', () => {
    expect(screen.getByText(/date/i)).toBeInTheDocument();
  });
});
