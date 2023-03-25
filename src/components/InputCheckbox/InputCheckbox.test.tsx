import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import InputCheckbox from './InputCheckbox';

describe('InputCheckbox test', () => {
  beforeEach(() => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    render(<InputCheckbox text="checkbox text" inputError="Error" inputRef={ref} />);
  });

  test('render InputCheckbox component', () => {
    expect(screen.getByText(/checkbox text/i)).toBeInTheDocument();
  });
});
